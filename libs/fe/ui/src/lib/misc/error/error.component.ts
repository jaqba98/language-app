// Done
import { Component, Input } from '@angular/core';

import { TextComponent } from '../text/text.component';

@Component({
  selector: 'lib-error',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  @Input({ required: true }) value!: string;
}
