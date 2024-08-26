import { CommonModule } from '@angular/common';
import {
  Component, ElementRef, EventEmitter, Input, Output,
  ViewChild,
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
  @ViewChild('self') self!: ElementRef;

  @Input({ required: true }) control!: FormControl;

  @Input() isPrimary = false;

  @Input() fullWidth = false;

  @Output() clickEvent = new EventEmitter<ButtonOutputModel>();

  isFocused = false;

  onClick() {
    this.isFocused = !this.isFocused;
    this.control.setValue(true);
    if (this.isPrimary) return;
    this.clickEvent.emit({ isFocused: this.isFocused });
  }

  getButtonType() {
    return this.isPrimary ? 'submit' : 'button';
  }
}
