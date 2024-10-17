import { Component, Input } from '@angular/core';

import { TextComponent } from '@english-learning/fe-component';

@Component({
  selector: 'lib-error',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {
  @Input({ required: true }) value!: string;
}
