import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BemService } from '../service/bem.service';

@Directive()
export class ComponentDirective<TEventType> implements OnInit {
  @Output() event = new EventEmitter<TEventType>();

  classNames: string[] = [];

  constructor(private readonly bem: BemService) {}

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
