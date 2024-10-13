import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { ClickActionDirective } from '../../action/click-action.directive';
import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { ButtonType, ButtonShapeType } from './button.type';
import { FlexComponent } from '../../layout/flex/flex.component';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [NgClass, ClickActionDirective, FlexComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
/**
 * Button Component
 */
export class ButtonComponent extends EventEmitterDirective<boolean> {
  @Input() type: ButtonType = 'button';

  @Input() shape: ButtonShapeType = 'rectangle';

  @Input() fullWidth = false;

  protected override afterInit() {
    this.addClassName('button');
    this.addClassName('button', this.shape);
    if (this.fullWidth) {
      this.addClassName('button', 'full-width');
    }
  }

  onEvent(eventData: boolean) {
    this.controlForm.setValue(true);
    if (this.type === 'submit') return;
    this.emit(eventData);
  }
}
