import { Directive, Injector, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BemService } from '../service/bem.service';

@Directive()
export class ComponentDirective implements OnInit, OnDestroy {
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

  protected afterInit() {}

  protected afterDestroy() {}

  protected addClass(block = '', element = '', modifier = '') {
    const bemClassName = this.bem.buildBem(block, element, modifier);
    this.classNames.push(bemClassName);
  }
}
