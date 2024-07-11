import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { IconComponent } from '../../misc/icon/icon.component';

@Component({
  selector: 'lib-button-icon',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss'
})
export class ButtonIconComponent {
  @ViewChild('buttonIcon') buttonIcon!: ElementRef;  

  @Input({ required: true }) src!: string;

  @Input({ required: true }) alt!: string;

  @Output() eventClick = new EventEmitter();

  @Output() eventBlur = new EventEmitter();

  onClick() {
    this.eventClick.emit();
  }

  onBlur() {
    this.eventBlur.emit();
  }
}
