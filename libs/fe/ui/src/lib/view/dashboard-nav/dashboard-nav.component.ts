import { Component } from '@angular/core';
import { Properties } from 'csstype';
import { NgIf } from '@angular/common';

import {
  ObserverModel,
  BreakpointModel,
  BreakpointService,
  BreakpointEnum,
} from '@english-learning/fe-system';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../layout/flex/flex.component';
import { FontAwesomeComponent } from '../../external/font-awesome/font-awesome.component';
import { HamburgerFormComponent } from '../../form/hamburger-form/hamburger-form.component';
import { DashboardNavFormComponent } from '../../form/dashboard-nav-form/dashboard-nav-form.component';

@Component({
  selector: 'lib-dashboard-nav',
  standalone: true,
  imports: [
    NgIf,
    CardComponent,
    FlexComponent,
    FontAwesomeComponent,
    HamburgerFormComponent,
    DashboardNavFormComponent,
  ],
  templateUrl: './dashboard-nav.component.html',
})
/**
 * Dashboard Nav Component
 */
export class DashboardNavComponent implements ObserverModel<BreakpointModel> {
  justifyContent: Properties['justifyContent'] = 'space-between';

  isMobile = true;

  isMenuVisible = false;

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    const { breakpoint } = data;
    if (breakpoint === BreakpointEnum.XSmall) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.isMenuVisible = false;
    }
    if (breakpoint === BreakpointEnum.Large || breakpoint === BreakpointEnum.XLarge) {
      this.justifyContent = 'space-around';
    } else {
      this.justifyContent = 'space-between';
    }
  }

  onHamburger() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
