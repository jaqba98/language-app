import { CommonModule } from '@angular/common';
import { Component, Input, Injector, SimpleChanges } from '@angular/core';

import { ComponentDirective } from '@english-learning/fe-system';
import { CardType } from './card.type';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent extends ComponentDirective {
  @Input() type: CardType = 'default';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'card');
  }

  protected override afterChanges(changes: SimpleChanges): void {
    if (changes['type']) {
      const { previousValue, currentValue } = changes['type'];
      if (previousValue !== currentValue) {
        this.removeClassName(previousValue);
        this.addClassName(currentValue);
      }
    }
  }
}
