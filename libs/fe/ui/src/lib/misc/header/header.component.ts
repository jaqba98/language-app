import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextComponent } from '../text/text.component';
import { TextType } from '../text/text.type';
import { FlexComponent } from '../flex/flex.component';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    CommonModule,
    TextComponent,
    FlexComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input({ required: true }) value!: string;

  @Input() textType: TextType = 'paragraph';

  isSelected = false;
}
