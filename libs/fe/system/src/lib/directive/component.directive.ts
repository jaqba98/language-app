import {
  Directive,
  OnInit,
  OnDestroy,
  OnChanges,
  ViewChild,
  ElementRef,
  Input,
  Injector,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { BemBuilderService } from '../builder/bem-builder.service';

@Directive()
export class ComponentDirective implements OnInit, OnDestroy, OnChanges {
  @ViewChild('self') self!: ElementRef;

  @Input() controlForm!: FormControl;

  protected classNames: string[] = [];

  private readonly bemBuilder: BemBuilderService;

  constructor(
    protected readonly injector: Injector,
    protected readonly blockName: string,
  ) {
    this.bemBuilder = this.injector.get(BemBuilderService);
  }

  ngOnInit() {
    this.classNames.push(this.blockName);
    this.afterInit();
  }

  ngOnDestroy() {
    this.afterDestroy();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.afterChanges(changes);
  }

  protected afterInit() {}

  protected afterDestroy() {}

  protected afterChanges(_changes: SimpleChanges) {}

  protected addClassName(element = '', modifier = '') {
    const className = this.bemBuilder.build(this.blockName, element, modifier);
    if (this.classNames.includes(className)) return;
    this.classNames.push(className);
  }

  protected removeClassName(element = '', modifier = '') {
    const className = this.bemBuilder.build(this.blockName, element, modifier);
    this.classNames = this.classNames.filter(
      currClassName => currClassName !== className,
    );
  }

  protected removeClassNames() {
    this.classNames = [];
  }

  protected assignStyle<TValue>(
    condition: boolean,
    valueTrue: TValue,
    valueFalse: TValue | undefined = undefined,
  ) {
    return condition ? valueTrue : valueFalse;
  }
}
