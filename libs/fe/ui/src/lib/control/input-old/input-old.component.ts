import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input-old',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-old.component.html',
  styleUrl: './input-old.component.scss',
})
export class InputOldComponent {
  @Input() value = '';

  @Output() eventInput = new EventEmitter<string>();

  onInput() {
    this.eventInput.emit(this.value);
  }
}
