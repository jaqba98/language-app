import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) control!: FormControl;

  @Input() isPrimary = false;

  @Input() label = '';

  @Output() buttonEvent = new EventEmitter();

  onClick() {
    this.control.setValue(true);
    if (!this.isPrimary) {
      this.buttonEvent.emit();
    }
  }

  getButtonType() {
    return this.isPrimary ? 'submit' : 'button';
  }
}
