import { Component, Input } from '@angular/core';

import { TextComponent } from '@english-learning/fe-component';

@Component({
  selector: 'lib-success',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss',
})
export class SuccessComponent {
  @Input({ required: true }) value!: string;
}
