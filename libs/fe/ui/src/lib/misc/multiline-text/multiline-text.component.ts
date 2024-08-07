import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TextComponent } from '../text/text.component';

@Component({
  selector: 'lib-multiline-text',
  standalone: true,
  imports: [
    CommonModule,
    TextComponent,
  ],
  templateUrl: './multiline-text.component.html',
})
export class MultilineTextComponent {
  @Input({ required: true }) lines: string[] = [];
}
