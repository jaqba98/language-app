import {
  Component, EventEmitter, Input, Output, ViewChild,
} from '@angular/core';

import { ButtonComponent } from '../button/button.component';
import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-button-text',
  standalone: true,
  imports: [
    ButtonComponent,
    TextComponent,
  ],
  templateUrl: './button-text.component.html',
  styleUrl: './button-text.component.scss',
})
export class ButtonTextComponent {
  @ViewChild('self') self!: ButtonComponent;

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
