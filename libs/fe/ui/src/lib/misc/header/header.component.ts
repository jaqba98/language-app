import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) value!: string;

  @Input() textType: TextType = 'paragraph';

  @Input({ required: true }) link!: string;

  isSelected = false;
}
