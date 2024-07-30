import { CommonModule } from '@angular/common';
import {
  Component, HostListener, ViewChild,
} from '@angular/core';
import { Properties } from 'csstype';

import {
  BreakpointEnum, BreakpointModel, BreakpointObserverType, BreakpointService,
} from '@english-learning/fe-system';
import { CardComponent } from '../../misc/card/card.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { PositionComponent } from '../../misc/position/position.component';
import { TextComponent } from '../../misc/text/text.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { IconComponent } from '../../misc/icon/icon.component';
import { routesMainNav } from '../../service/routes-menu.service';
import { WrapperComponent } from '../../misc/wrapper/wrapper.component';
import { CardEnum } from '../../misc/card/card.enum';

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
export class MainNavComponent implements BreakpointObserverType {
  @ViewChild('hamburger') hamburger!: ButtonIconComponent;

  @ViewChild('menuCard') menuCard!: CardComponent;

  @ViewChild('menuCardOptions') menuCardOptions!: CardComponent;

  options = routesMainNav;

  isMobile = true;

  menuVisible = false;

  mainNavJustifyContent: Properties['justifyContent'] = 'space-between';

  mainNavMobileCardType = CardEnum.card__darken;

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.menuVisible = false;
    }

    if (data.breakpoint === BreakpointEnum.Large || data.breakpoint === BreakpointEnum.XLarge) {
      this.mainNavJustifyContent = 'space-around';
    } else {
      this.mainNavJustifyContent = 'space-between';
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const { target } = event;
    if (this.hamburger && this.hamburger.self.self.nativeElement.contains(target)) {
      this.menuVisible = !this.menuVisible;
      return;
    }
    if (this.menuCard && this.menuCardOptions.self.nativeElement.contains(target)) {
      this.menuVisible = !this.menuVisible;
      return;
    }
    if (this.menuCard && this.menuCard.self.nativeElement.contains(target)) {
      this.menuVisible = true;
      return;
    }
    this.menuVisible = false;
  }
}
