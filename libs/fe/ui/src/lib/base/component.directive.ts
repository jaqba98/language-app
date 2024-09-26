import { Directive, OnInit } from '@angular/core';

import { BemService } from '../service/bem.service';

@Directive({
  selector: '[libComponentDirective]',
})
export class ComponentDirective implements OnInit {
  classNames: string[] = [];

  constructor(private readonly bem: BemService) {}

  ngOnInit() {
    this.onAfterInit();
  }

  onAfterInit() {
    throw new Error('Method not implemented.');
  }

  onClick() {
    throw new Error('Method not implemented.');
  }

  protected addClassToComponent(block = '', element = '', modifier = '') {
    const bemClassName = this.bem.buildBem(block, element, modifier);
    this.classNames.push(bemClassName);
  }
}
