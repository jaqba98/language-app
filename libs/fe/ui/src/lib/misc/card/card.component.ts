import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { ComponentDirective } from '../../base/component.directive';
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

  private readonly block = 'card';

  protected override afterChanges() {
    this.removeClassNames();
    this.addClassName(this.block);
    this.addClassName(this.block, this.type);
  }
}
