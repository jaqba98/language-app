import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-link-old',
  standalone: true,
  imports: [
    TextComponent,
    RouterLink,
  ],
  templateUrl: './link-old.component.html',
  styleUrl: './link-old.component.scss',
})
export class LinkOldComponent {
  @Input({ required: true }) value!: string;

  @Input() link: string | null = null;
}
