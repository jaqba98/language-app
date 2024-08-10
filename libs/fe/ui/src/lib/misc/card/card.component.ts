import { CommonModule } from '@angular/common';
import {
  Component, ViewChild, ElementRef, Input,
} from '@angular/core';
import { Properties } from 'csstype';

import { CardType } from './card.type';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @ViewChild('self') self!: ElementRef;

  @Input() cardType: CardType = 'card__default';

  @Input() height: Properties['height'] = 'auto';
}
