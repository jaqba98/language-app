import { Component, Input } from '@angular/core';
import { Properties } from 'csstype';

@Component({
  selector: 'lib-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() flexDirection: Properties['flexDirection'] = "row";

  buildCard(): Properties {
    return {
      flexDirection: this.flexDirection
    }
  }
}
