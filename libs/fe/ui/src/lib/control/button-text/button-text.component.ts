import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { TextComponent } from '../../misc/text/text.component';
import { TextColorType } from '../../misc/text/text.type';
import { ButtonComponent } from '../button/button.component';

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

  textColor: TextColorType = 'buttonTextClose';

  onClickEvent() {
    this.clickEvent.emit();
  }

  onMouseEnterEvent() {
    this.textColor = 'buttonTextOpen';
  }

  onMouseLeaveEvent() {
    this.textColor = 'buttonTextClose';
  }
}
