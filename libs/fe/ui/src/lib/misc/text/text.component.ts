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

  @Input() textColor: TextColorType = 'tertiary';

  getTextClasses() {
    return {
      'text__primary': this.textColor === 'primary',
      'text__secondary': this.textColor === 'secondary',
      'text__tertiary': this.textColor === 'tertiary',
    };
  }
}
