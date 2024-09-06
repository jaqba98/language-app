// Done
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { TextComponent } from '../../misc/text/text.component';
import { ButtonComponent } from '../button/button.component';
import { ControlButtonTextModel } from '../../model/control/control-button-text.model';

@Component({
  selector: 'lib-button-text',
  standalone: true,
  imports: [ButtonComponent, TextComponent],
  templateUrl: './button-text.component.html',
})
export class ButtonTextComponent {
  @Input({ required: true }) form!: FormControl;

  @Input({ required: true }) control!: ControlButtonTextModel;

  @Output() clickEvent = new EventEmitter();

  onClickEvent() {
    this.clickEvent.emit();
  }
}
