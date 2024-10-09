import { CommonModule } from '@angular/common';
import {
  Directive,
  OnInit,
  OnDestroy,
  Injector,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { BemService } from '../service/bem.service';

@Directive()
export class ComponentDirective implements OnInit, OnDestroy {
  @ViewChild('self') self!: ElementRef;

  @Input() formControl!: FormControl;

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

  protected addClassName(block = '', element = '', modifier = '') {
    const className = this.bem.buildBem(block, element, modifier);
    this.classNames.push(className);
  }
}
