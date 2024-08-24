import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Properties } from 'csstype';

import {
  ObserverModel, BreakpointModel, BreakpointEnum, BreakpointService,
} from '@english-learning/fe-system';
import { TextComponent } from '../../misc/text/text.component';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../layout/flex/flex.component';

@Component({
  selector: 'lib-sentence-structure',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TextComponent,
    FlexComponent,
  ],
  templateUrl: './sentence-structure.component.html',
})
export class SentenceStructureComponent implements ObserverModel<BreakpointModel> {
  @Input() items: string[] = [];

  flexDirection: Properties['flexDirection'] = 'row';

  gap: Properties['gap'] = '0';

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.flexDirection = 'column';
      this.gap = '0';
    } else {
      this.flexDirection = 'row';
      this.gap = '0.5em';
    }
  }
}
