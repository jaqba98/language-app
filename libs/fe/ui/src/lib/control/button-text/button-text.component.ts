import { Component, Input } from '@angular/core';

import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-button-text',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './button-text.component.html',
  styleUrl: './button-text.component.scss'
})
export class ButtonTextComponent {
  @Input({ required: true }) value!: string;
}
