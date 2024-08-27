import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardType } from './card.type';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardType: CardType = 'card__default';
}
