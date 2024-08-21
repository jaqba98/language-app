import { Component, ViewChild } from '@angular/core';
import { Properties } from 'csstype';

import {
  BreakpointService,
  BreakpointModel,
  BreakpointEnum,
  ObserverModel,
} from '@english-learning/fe-system';
import { ButtonIconOldComponent } from '../../control/button-icon-old/button-icon-old.component';
import { ButtonTextOldComponent } from '../../control/button-text-old/button-text-old.component';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { IconComponent } from '../../misc/icon/icon.component';
import { PositionComponent } from '../../misc/position/position.component';
import { TextComponent } from '../../misc/text/text.component';
import { WrapperComponent } from '../../misc/wrapper/wrapper.component';
import { RoutesMenuModel } from '../../model/routes-menu.model';
import { HamburgerFormComponent } from '../../form/hamburger-form/hamburger-form.component';

@Component({
  selector: 'lib-main-nav',
  standalone: true,
  imports: [
    CardComponent,
    ButtonIconOldComponent,
    ButtonTextOldComponent,
    PositionComponent,
    TextComponent,
    FlexComponent,
    IconComponent,
    WrapperComponent,
    HamburgerFormComponent,
  ],
  templateUrl: './main-nav.component.html',
})
export class MainNavComponent implements ObserverModel<BreakpointModel> {
  @ViewChild('hamburger') hamburger!: ButtonIconOldComponent;

  @ViewChild('menuCard') menuCard!: CardComponent;

  @ViewChild('menuCardOptions') menuCardOptions!: CardComponent;

  options: RoutesMenuModel[] = [
    { value: 'Home', link: '/home' },
    { value: 'Vocabulary', link: '/vocabulary' },
    { value: 'Grammar', link: '/grammar' },
  ];

  isMobile = true;

  isMenuVisible = false;

  mainNavJustifyContent: Properties['justifyContent'] = 'space-between';

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.isMenuVisible = false;
    }
  }

  onClick() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
