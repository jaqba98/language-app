import { CommonModule } from '@angular/common';
import { Component, Injector, Input } from '@angular/core';

import { EventEmitterDirective } from '@english-learning/fe-system';
import { ButtonKindType, ButtonShapeType } from './button.type';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent extends EventEmitterDirective<boolean> {
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
    if (this.kind === 'submit') return;
    this.emit(true);
  }
}
