import {
  Directive,
  EventEmitter,
  Injector,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BemService } from '../service/bem.service';

@Directive()
export class ComponentDirective<TEvent> implements OnInit, OnDestroy {
  @Output() event = new EventEmitter<TEvent>();

  private readonly bem: BemService;

  protected readonly classNames: string[] = [];

  constructor(protected readonly injector: Injector) {
    this.bem = this.injector.get(BemService);
  }

  static buildImports() {
    return [CommonModule];
  }

  ngOnInit() {
    this.afterInit();
  }

  ngOnDestroy() {
    this.afterDestroy();
  }

  protected onClick() {
    this.event.emit(this.onClickAction());
  }

  protected afterInit() {}

  protected afterDestroy() {}

  protected onClickAction(): TEvent {
    throw new Error('Method not implemented.');
  }

  protected addClass(block = '', element = '', modifier = '') {
    const bemClassName = this.bem.buildBem(block, element, modifier);
    this.classNames.push(bemClassName);
  }
}
