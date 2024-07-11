import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  @Input({ required: true }) value!: string;
}
