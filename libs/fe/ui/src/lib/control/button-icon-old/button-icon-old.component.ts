import {
  Component, EventEmitter, Input, Output, ViewChild,
} from '@angular/core';

import { ButtonOldComponent } from '../button-old/button-old.component';
import { IconComponent } from '../../misc/icon/icon.component';

@Component({
  selector: 'lib-button-icon-old',
  standalone: true,
  imports: [
    ButtonOldComponent,
    IconComponent,
  ],
  templateUrl: './button-icon-old.component.html',
  styleUrl: './button-icon-old.component.scss',
})
export class ButtonIconOldComponent {
  @ViewChild('self') self!: ButtonOldComponent;

  @Input({ required: true }) src!: string;

  @Input({ required: true }) alt!: string;

  @Input() link: string | null = null;

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
