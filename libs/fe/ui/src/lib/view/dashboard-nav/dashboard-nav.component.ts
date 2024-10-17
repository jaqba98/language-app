import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

import {
  ObserverModel,
  BreakpointModel,
  BreakpointService,
  BreakpointEnum,
} from '@english-learning/fe-system';
import { FontAwesomeComponent } from '@english-learning/fe-component';
import { SpaceType } from '@english-learning/shared-type';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../layout/flex/flex.component';
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
  justifyContent: SpaceType = 'none';

  isMobile = true;

  menuIsOpen = false;

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.menuIsOpen) return;
    const navMobileInside = (event.target as HTMLElement).closest(
      'lib-dashboard-nav-form',
    );
    const hamburgerMobileInside = (event.target as HTMLElement).closest(
      'lib-hamburger-form',
    );
    if (navMobileInside || hamburgerMobileInside) return;
    this.menuIsOpen = false;
  }

  update(data: BreakpointModel) {
    const { breakpoint } = data;
    if (breakpoint === BreakpointEnum.XSmall) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.menuIsOpen = false;
    }
    if (breakpoint === BreakpointEnum.Large || breakpoint === BreakpointEnum.XLarge) {
      this.justifyContent = 'around';
    } else {
      this.justifyContent = 'between';
    }
  }

  onHamburger() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
