import { Component, Input } from '@angular/core';

import { TextComponent } from '../../misc/text/text.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-link',
  standalone: true,
  imports: [
    TextComponent,
    RouterLink
  ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input({ required: true }) value!: string;

  @Input() link = "";
}
