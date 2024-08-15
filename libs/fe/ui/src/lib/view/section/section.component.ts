import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Properties } from 'csstype';

import {
  ObserverModel, BreakpointModel, BreakpointService, BreakpointEnum,
} from '@english-learning/fe-system';
import { FlexComponent } from '../../misc/flex/flex.component';
import { FlexItemComponent } from '../../misc/flex-item/flex-item.component';
import { SubNavComponent } from '../sub-nav/sub-nav.component';
import { RoutesMenuModel } from '../../model/routes-menu.model';

@Component({
  selector: 'lib-section',
  standalone: true,
  imports: [
    RouterOutlet,
    FlexComponent,
    FlexItemComponent,
    SubNavComponent,
  ],
  templateUrl: './section.component.html',
})
export class SectionComponent implements ObserverModel<BreakpointModel> {
  @Input({ required: true }) header!: string;

  @Input({ required: true }) options!: RoutesMenuModel[];

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
