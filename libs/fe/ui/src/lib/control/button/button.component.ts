// Done
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ButtonType } from './button.type';

@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) control!: FormControl;

  @Input() type: ButtonType = 'submit';

  @Input() isPrimary = false;

  @Output() clickEvent = new EventEmitter();

  @Output() mouseEnterEvent = new EventEmitter();

  @Output() mouseLeaveEvent = new EventEmitter();

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
}
