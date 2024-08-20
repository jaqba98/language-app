import {
  Component, EventEmitter, Input, Output, ViewChild,
} from '@angular/core';

import { ButtonOldComponent } from '../button-old/button-old.component';
import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-button-text-old',
  standalone: true,
  imports: [
    ButtonOldComponent,
    TextComponent,
  ],
  templateUrl: './button-text-old.component.html',
  styleUrl: './button-text-old.component.scss',
})
export class ButtonTextOldComponent {
  @ViewChild('self') self!: ButtonOldComponent;

  @Input({ required: true }) value!: string;

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
