import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TextEnum } from './text.enum';

@Component({
  selector: 'lib-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input({ required: true }) value!: string;

  @Input() textType = TextEnum.paragraph;
}
