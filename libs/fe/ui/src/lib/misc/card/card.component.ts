import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Properties } from 'csstype';

@Component({
  selector: 'lib-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() flexDirection: Properties['flexDirection'] = "row";

  @Output() eventClick = new EventEmitter();

  selectedItem = false;

  buildCard(): Properties {
    return {
      flexDirection: this.flexDirection
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
