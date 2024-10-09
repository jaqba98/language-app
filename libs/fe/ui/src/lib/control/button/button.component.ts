import { Component, Input } from '@angular/core';

import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { ButtonType } from './button.type';

@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent extends EventEmitterDirective<boolean> {
  @Input() type: ButtonType = 'button';

  onClick() {
    this.controlForm.setValue(true);
    if (this.type === 'submit') return;
    this.emit(true);
  }
}
