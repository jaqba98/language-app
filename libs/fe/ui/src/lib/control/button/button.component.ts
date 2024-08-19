import {
  Component, ViewChild, ElementRef, Input, Output, EventEmitter,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @ViewChild('self') self!: ElementRef;

  @Input() link: string | null = null;

  @Input() fullWidth = false;

  @Output() eventClick = new EventEmitter();

  @Output() eventBlur = new EventEmitter();

  onClick() {
    this.eventClick.emit();
  }

  onBlur() {
    this.eventBlur.emit();
  }

  setFocus() {
    this.self.nativeElement.focus();
  }
}
