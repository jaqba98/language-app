import { CommonModule } from '@angular/common';
import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { ButtonOutputModel } from './button-output.model';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) control!: FormControl;

  @Input() isPrimary = false;

  @Input() fullWidth = false;

  @Output() clickEvent = new EventEmitter<ButtonOutputModel>();

  isFocused = false;

  onFocus() {
    this.isFocused = true;
    this.onClick();
  }

  onBlur() {
    this.isFocused = false;
    this.onClick();
  }

  getButtonType() {
    return this.isPrimary ? 'submit' : 'button';
  }

  buildStyles() {
    return {
      'button__full-width': this.fullWidth,
      'button__is-focused': this.isFocused,
    };
  }

  private onClick() {
    this.control.setValue(true);
    if (this.isPrimary) return;
    this.clickEvent.emit({ isFocused: this.isFocused });
  }
}
