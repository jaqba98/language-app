import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Properties } from 'csstype';

import {
  ObserverModel, BreakpointModel, BreakpointService, BreakpointEnum,
} from '@english-learning/fe-system';
import { FlexItemComponent } from '../../layout/flex-item/flex-item.component';
import { FlexComponent } from '../../layout/flex/flex.component';
import { CardComponent } from '../../misc/card/card.component';
import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-section',
  standalone: true,
  imports: [
    FlexComponent,
    FlexItemComponent,
    CardComponent,
    TextComponent,
    RouterOutlet,
  ],
  templateUrl: './section.component.html',
})
export class SectionComponent implements ObserverModel<BreakpointModel> {
  @Input({ required: true }) header!: string;

  flexDirection: Properties['flexDirection'] = 'column';

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.flexDirection = 'column';
    } else {
      this.flexDirection = 'row';
    }
  }
}
