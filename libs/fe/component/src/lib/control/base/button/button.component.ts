import { CommonModule } from '@angular/common';
import { Component, Injector, Input } from '@angular/core';

import { ComponentDirective } from '@english-learning/fe-system';
import { ButtonKindType, ButtonShapeType } from './button.type';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent extends ComponentDirective {
  @Input() kind: ButtonKindType = 'button';

  @Input() shape: ButtonShapeType = 'rectangle';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'button');
  }

  protected override afterInit() {
    this.addClassName(this.shape);
  }

  onClick() {
    this.controlForm.setValue(true);
  }
}
