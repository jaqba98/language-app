import { CommonModule } from '@angular/common';
import {
  Directive,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
  Injector,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { BemService } from '../service/bem.service';

@Directive()
export class ComponentDirective implements OnInit, OnDestroy {
  @ViewChild('self') self!: ElementRef;

  @Input() controlForm!: FormControl;

  private readonly bem: BemService;

  protected readonly classNames: string[] = [];

  constructor(protected readonly injector: Injector) {
    this.bem = this.injector.get(BemService);
  }

  // TODO: Remove it in the future
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
