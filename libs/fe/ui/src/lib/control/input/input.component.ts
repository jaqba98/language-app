import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() value = '';

  @Output() eventInput = new EventEmitter<string>();

  onInput() {
    this.eventInput.emit(this.value);
  }
}
