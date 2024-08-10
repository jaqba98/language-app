import { CommonModule } from '@angular/common';
import { Component, ViewChild, HostListener } from '@angular/core';
import { Properties } from 'csstype';

import {
  BreakpointService,
  BreakpointModel,
  BreakpointEnum,
  ObserverModel,
} from '@english-learning/fe-system';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { IconComponent } from '../../misc/icon/icon.component';
import { PositionComponent } from '../../misc/position/position.component';
import { TextComponent } from '../../misc/text/text.component';
import { WrapperComponent } from '../../misc/wrapper/wrapper.component';
import { routesMainNav } from '../../service/routes-menu.service';

@Component({
  selector: 'lib-main-nav',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ButtonIconComponent,
    ButtonTextComponent,
    PositionComponent,
    TextComponent,
    FlexComponent,
    IconComponent,
    WrapperComponent,
  ],
  templateUrl: './main-nav.component.html',
})
export class MainNavComponent implements ObserverModel<BreakpointModel> {
  @ViewChild('hamburger') hamburger!: ButtonIconComponent;

  @ViewChild('menuCard') menuCard!: CardComponent;

  @ViewChild('menuCardOptions') menuCardOptions!: CardComponent;

  options = routesMainNav;

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

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const { target } = event;
    if (this.hamburger && this.hamburger.self.self.nativeElement.contains(target)) {
      this.isMenuVisible = !this.isMenuVisible;
      return;
    }
    if (this.menuCard && this.menuCardOptions.self.nativeElement.contains(target)) {
      this.isMenuVisible = !this.isMenuVisible;
      return;
    }
    if (this.menuCard && this.menuCard.self.nativeElement.contains(target)) {
      this.isMenuVisible = true;
      return;
    }
    this.isMenuVisible = false;
  }
}
