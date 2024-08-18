import { Component, Input } from '@angular/core';

import { TextComponent } from '../text/text.component';

@Component({
  selector: 'lib-counter',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  @Input({ required: true }) value!: number;

  @Input() type: 'success' | 'error' | 'info' = 'info';
}
