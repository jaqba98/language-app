import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TextComponent } from '../../misc/text/text.component';
import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { ButtonComponent } from '../button/button.component';
import { EventEmitterDirective } from '../../base/event-emitter.directive';

@Component({
  selector: 'lib-button-text',
  standalone: true,
  imports: [ButtonComponent, TextComponent],
  templateUrl: './button-text.component.html',
})
export class ButtonTextComponent extends EventEmitterDirective<boolean> {
  @Input({ required: true }) form!: FormControl;

  @Input({ required: true }) control!: ControlButtonTextModel;

  onClick(event: boolean) {
    this.emit(event);
  }
}
