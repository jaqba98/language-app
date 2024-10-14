import { CommonModule } from '@angular/common';
import {
  Directive,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
  Injector,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { BemService } from '../service/bem.service';

@Directive()
/**
 * Component Directive
 */
export class ComponentDirective implements OnInit, OnDestroy, OnChanges {
  @ViewChild('self') self!: ElementRef;

  @Input() controlForm!: FormControl;

  private readonly bem: BemService;

  protected classNames: string[] = [];

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

  ngOnChanges(changes: SimpleChanges) {
    this.afterChanges(changes);
  }

  protected afterInit() {}

  protected afterDestroy() {}

  protected afterChanges<T>(_changes: T) {}

  protected addClassName(block = '', element = '', modifier = '') {
    const className = this.bem.buildBem(block, element, modifier);
    this.classNames.push(className);
  }

  protected removeClassNames() {
    this.classNames = [];
  }
}
