import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Properties } from 'csstype';

@Component({
  selector: 'lib-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @ViewChild('card') card!: ElementRef;

  @Input() flexDirection: Properties['flexDirection'] = "row";

  @Input() height: Properties["height"] = "auto";

  @Output() eventClick = new EventEmitter();

  selectedItem = false;

  buildCard(): Properties {
    return {
      flexDirection: this.flexDirection,
      height: this.height
    }
  }

  onClick() {
    this.eventClick.emit();
  }

  onMouseEnter() {
    this.selectedItem = true;
  }

  onMouseLeave() {
    this.selectedItem = false;
  }
}
