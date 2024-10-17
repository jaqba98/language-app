import { Component, Injector, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { ComponentDirective } from '@english-learning/fe-system';
import { CardType } from './card.type';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
/**
 * Card Component
 */
export class CardComponent extends ComponentDirective {
  @Input() type: CardType = 'default';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'card');
  }

  protected override afterChanges() {
    this.removeClassNames();
    this.addClassName(this.type);
  }
}
