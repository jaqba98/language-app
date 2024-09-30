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

  protected readonly classNames: string[] = [];

  private readonly bem: BemService;

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

  protected afterInit() {}

  protected afterDestroy() {}

  protected onEvent(eventData: TEvent) {
    this.event.emit(eventData);
  }

  protected addClassName(block = '', element = '', modifier = '') {
    const className = this.bem.buildBem(block, element, modifier);
    this.classNames.push(className);
  }
}
