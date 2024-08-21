import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  @Input({ required: true }) formControl!: FormControl;

  @Input({ required: true }) label!: string;
}
