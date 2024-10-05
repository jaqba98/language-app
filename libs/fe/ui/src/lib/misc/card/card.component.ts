import { Component, Input } from '@angular/core';

import { ComponentDirective } from '../../base/component.directive';
import { CardType } from './card.type';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [...ComponentDirective.buildImports()],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent extends ComponentDirective {
  @Input() type: CardType = 'default-light';

  protected override afterInit() {
    this.addClassName('card', this.type);
  }
}
