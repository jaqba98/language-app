import { Component, ViewChild } from '@angular/core';
import { Properties } from 'csstype';

import {
  ObserverModel,
  BreakpointModel,
  BreakpointService,
  BreakpointEnum,
} from '@english-learning/fe-system';
import { WrapperComponent } from '../../misc/wrapper/wrapper.component';
import { FlexComponent } from '../../layout/flex/flex.component';
import { CardComponent } from '../../misc/card/card.component';
import { IconComponent } from '../../misc/icon/icon.component';
import { HamburgerFormComponent } from '../../form/hamburger-form/hamburger-form.component';
import { MainNavFormComponent } from '../../form/main-nav-form/main-nav-form.component';

@Component({
  selector: 'lib-main-nav',
  standalone: true,
  imports: [
    FlexComponent,
    CardComponent,
    IconComponent,
    WrapperComponent,
    HamburgerFormComponent,
    MainNavFormComponent,
  ],
  templateUrl: './main-nav.component.html',
})
export class MainNavComponent
  implements ObserverModel<BreakpointModel>
{
  @ViewChild('hamburgerForm') hamburgerForm!: WrapperComponent;

  @ViewChild('mainNavForm') mainNavForm!: WrapperComponent;

  isMobile = true;

  isMenuVisible = false;

  mainNavJustifyContent: Properties['justifyContent'] =
    'space-between';

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
    if (
      breakpoint === BreakpointEnum.Large ||
      breakpoint === BreakpointEnum.XLarge
    ) {
      this.mainNavJustifyContent = 'space-around';
    } else {
      this.mainNavJustifyContent = 'space-between';
    }
  }

  onEvent() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
