import { Directive, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { StoreModel } from '@english-learning/fe-store';
import { BemService } from '../service/bem.service';

@Directive()
export class ComponentDirective<TEventType> implements OnInit {
  @Output() event = new EventEmitter<TEventType>();

  classNames: string[] = [];

  bem: BemService;

  store: Store<StoreModel>;

  constructor(protected readonly injector: Injector) {
    this.bem = this.injector.get(BemService);
    this.store = this.injector.get(Store<StoreModel>);
  }

  static buildImports() {
    return [CommonModule];
  }

  ngOnInit() {
    this.onAfterInit();
  }

  protected onAfterInit() {
    throw new Error('Method not implemented.');
  }

  protected onClick() {
    throw new Error('Method not implemented.');
  }

  protected addClassToComponent(block = '', element = '', modifier = '') {
    const bemClassName = this.bem.buildBem(block, element, modifier);
    this.classNames.push(bemClassName);
  }
}
