import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
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

  @Output() mouseEnterEvent = new EventEmitter();

  @Output() mouseLeaveEvent = new EventEmitter();

  isFocused = false;

  onClick() {
    this.control.setValue(true);
    if (this.isPrimary) return;
    this.clickEvent.emit();
  }

  onMouseEnter() {
    this.mouseEnterEvent.emit();
  }

  onMouseLeave() {
    this.mouseLeaveEvent.emit();
  }

  getButtonType() {
    return this.isPrimary ? 'submit' : 'button';
  }

  buildStyles() {
    return {
      'button__full-width': this.fullWidth,
    };
  }
}
