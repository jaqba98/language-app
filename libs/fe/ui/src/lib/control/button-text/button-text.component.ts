import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { TextComponent } from '../../misc/text/text.component';
import { TextColorType } from '../../misc/text/text.type';
import { ButtonComponent } from '../button/button.component';
import { ButtonOutputModel } from '../button/button-output.model';

@Component({
  selector: 'lib-button-text',
  standalone: true,
  imports: [
    ButtonComponent,
    TextComponent,
  ],
  templateUrl: './button-text.component.html',
})
export class ButtonTextComponent {
  @Input({ required: true }) control!: FormControl;

  @Input({ required: true }) label!: string;

  @Input() isPrimary = false;

  @Input() fullWidth = false;

  @Output() clickEvent = new EventEmitter();

  textColor: TextColorType = 'tertiary';

  onClickEvent(output: ButtonOutputModel) {
    this.textColor = output.isFocused ? 'primary' : 'tertiary';
    this.clickEvent.emit();
  }
}
