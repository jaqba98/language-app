import { CommonModule } from '@angular/common';
import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

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

  @Output() clickEvent = new EventEmitter();

  @Output() focusEvent = new EventEmitter();

  @Output() blurEvent = new EventEmitter();

  isFocused = false;

  onClick() {
    this.control.setValue(true);
    if (this.isPrimary) return;
    this.clickEvent.emit();
  }

  onFocus() {
    this.isFocused = true;
    this.control.setValue(true);
    if (this.isPrimary) return;
    this.focusEvent.emit();
  }

  onBlur() {
    this.isFocused = false;
    this.control.setValue(false);
    if (this.isPrimary) return;
    this.blurEvent.emit();
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
}
