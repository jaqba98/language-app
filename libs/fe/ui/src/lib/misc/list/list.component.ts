import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TextComponent } from '../text/text.component';

@Component({
  selector: 'lib-list',
  standalone: true,
  imports: [CommonModule, TextComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() items: string[] = [];
}
