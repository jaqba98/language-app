import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Properties } from 'csstype';

import {
  ObserverModel, BreakpointModel, BreakpointService, BreakpointEnum,
} from '@english-learning/fe-system';
import {
  FlexComponent,
  FlexItemComponent,
  routesGrammar,
  SubNavComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    RouterOutlet,
    FlexComponent,
    FlexItemComponent,
    SubNavComponent,
  ],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent implements ObserverModel<BreakpointModel> {
  grammarFlexDirection: Properties['flexDirection'] = 'column';

  options = routesGrammar;

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.grammarFlexDirection = 'column';
    } else {
      this.grammarFlexDirection = 'row';
    }
  }
}
