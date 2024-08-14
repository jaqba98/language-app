import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Properties } from 'csstype';

import {
  FlexComponent,
  FlexItemComponent,
  VocabularyNavComponent,
} from '@english-learning/fe-ui';
import {
  ObserverModel,
  BreakpointModel,
  BreakpointService,
  BreakpointEnum,
} from '@english-learning/fe-system';

@Component({
  selector: 'lib-vocabulary',
  standalone: true,
  imports: [
    RouterOutlet,
    VocabularyNavComponent,
    FlexComponent,
    FlexItemComponent,
  ],
  templateUrl: './vocabulary.component.html',
})
export class VocabularyComponent implements ObserverModel<BreakpointModel> {
  vocabularyFlexDirection: Properties['flexDirection'] = 'column';

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.vocabularyFlexDirection = 'column';
    } else {
      this.vocabularyFlexDirection = 'row';
    }
  }
}
