import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @ViewChild('self') self!: ElementRef;

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
