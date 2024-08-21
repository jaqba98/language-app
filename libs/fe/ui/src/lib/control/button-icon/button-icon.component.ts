import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../../misc/icon/icon.component';

@Component({
  selector: 'lib-button-icon',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss',
})
export class ButtonIconComponent {
  @Input({ required: true }) control!: FormControl;

  @Input({ required: true }) icon!: string;

  @Input({ required: true }) alt!: string;

  @Input() isPrimary = false;

  @Output() buttonIconEvent = new EventEmitter();

  onEvent() {
    this.buttonIconEvent.emit();
  }
}
