import { Component, Injector } from '@angular/core';
import { NgClass } from '@angular/common';

import {
  ObserverModel,
  BreakpointModel,
  BreakpointService,
  BreakpointEnum,
} from '@english-learning/fe-system';
import { TextComponent } from '@english-learning/fe-component';
import { FlexComponent } from '../../layout/flex/flex.component';
import { CardComponent } from '../../misc/card/card.component';
import { CardType } from '../../misc/card/card.type';
import { AuthViewType } from './auth-view.type';

@Component({
  selector: 'lib-auth-view',
  standalone: true,
  imports: [NgClass, FlexComponent, CardComponent, TextComponent],
  templateUrl: './auth-view.component.html',
  styleUrl: './auth-view.component.scss',
})
/**
 * Auth View Component
 */
export class AuthViewComponent implements ObserverModel<BreakpointModel> {
  cardType: CardType = 'none';

  style: AuthViewType = 'foreground';

  constructor(
    protected readonly injector: Injector,
    private readonly breakpoint: BreakpointService,
  ) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    this.cardType = data.breakpoint === BreakpointEnum.XSmall ? 'none' : 'default';
    this.style = data.breakpoint === BreakpointEnum.XSmall ? 'foreground' : 'background';
  }
}
