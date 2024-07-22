import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../../misc/icon/icon.component';

@Component({
  selector: 'lib-button-icon',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent
  ],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss'
})
export class ButtonIconComponent {
  @ViewChild('self') self!: ButtonComponent;

  @Input({ required: true }) src!: string;

  @Input({ required: true }) alt!: string;

  @Input() fullWidth = false;

  @Output() eventClick = new EventEmitter();

  @Output() eventBlur = new EventEmitter();

  emitClick() {
    this.eventClick.emit();
  }

  emitBlur() {
    this.eventBlur.emit();
  }
}
