import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { TextType } from './text.type';

@Component({
  selector: 'lib-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input({ required: true }) value!: string;

  @Input() textType: TextType = 'paragraph';

  @Input() clickable = false;

  @Output() eventMouseEnter = new EventEmitter();

  @Output() eventMouseLeave = new EventEmitter();

  onMouseEnter() {
    this.eventMouseEnter.emit();
  }

  onMouseLeave() {
    this.eventMouseLeave.emit();
  }
}
