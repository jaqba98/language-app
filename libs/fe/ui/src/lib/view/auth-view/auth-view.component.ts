import { Component, Injector } from '@angular/core';
import {
  ObserverModel,
  BreakpointModel,
  BreakpointService,
  BreakpointEnum,
} from '@english-learning/fe-system';

import { FlexComponent } from '../../layout/flex/flex.component';
import { CardComponent } from '../../misc/card/card.component';
import { TextComponent } from '../../misc/text/text.component';
import { CardType } from '../../misc/card/card.type';

@Component({
  selector: 'lib-auth-view',
  standalone: true,
  imports: [FlexComponent, CardComponent, TextComponent],
  templateUrl: './auth-view.component.html',
})
/**
 * Auth View Component
 */
export class AuthViewComponent implements ObserverModel<BreakpointModel> {
  cardType: CardType = 'none';

  constructor(
    protected readonly injector: Injector,
    private readonly breakpoint: BreakpointService,
  ) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    this.cardType = data.breakpoint === BreakpointEnum.XSmall ? 'none' : 'default';
  }
}
