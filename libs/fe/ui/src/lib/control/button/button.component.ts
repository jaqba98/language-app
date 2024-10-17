import { Component, Injector, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { ClickActionDirective } from '../../action/click-action.directive';
import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { ButtonType, ButtonShapeType } from './button.type';
import { FlexComponent } from '../../layout/flex/flex.component';
import { DisplayContentsDirective } from '../../base/display-contents.directive';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [NgClass, ClickActionDirective, FlexComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  hostDirectives: [DisplayContentsDirective],
})
/**
 * Button Component
 */
export class ButtonComponent extends EventEmitterDirective<boolean> {
  @Input() type: ButtonType = 'button';

  @Input() shape: ButtonShapeType = 'rectangle';

  @Input() fullWidth = false;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'button');
  }

  protected override afterInit() {
    this.addClassName(this.shape);
    if (this.fullWidth) {
      this.addClassName('full-width');
    }
  }

  onEvent(eventData: boolean) {
    this.controlForm.setValue(true);
    if (this.type === 'submit') return;
    this.emit(eventData);
  }
}
