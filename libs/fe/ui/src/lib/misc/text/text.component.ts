import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextType } from './text.type';

@Component({
  selector: 'lib-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  @Input({ required: true }) type!: TextType;

  @Input({ required: true }) value!: string;
}
