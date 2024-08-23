import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextColorType, TextType } from './text.type';

@Component({
  selector: 'lib-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input({ required: true }) value!: string;

  @Input() type: TextType = 'paragraph';

  @Input() textColor: TextColorType = 'normal';

  getTextClasses() {
    return {
      'text__button-text-open': this.textColor === 'buttonTextOpen',
      'text__button-text-close': this.textColor === 'buttonTextClose',
    };
  }
}
