import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breakpoints } from '@angular/cdk/layout';

import { ScreenBreakpointAppService } from '@english-learning/fe-system';
import { CardComponent } from '../../misc/card/card.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { PositionComponent } from '../../misc/position/position.component';
import { TextComponent } from "../../misc/text/text.component";
import { FlexComponent } from '../../misc/flex/flex.component';
import { IconComponent } from "../../misc/icon/icon.component";
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
    IconComponent
  ],
  templateUrl: './main-nav.component.html',
  providers: [
    { provide: ScreenBreakpointAppService }
  ]
})
export class MainNavComponent implements OnDestroy {
  @ViewChild('hamburger') hamburger!: ButtonIconComponent;
  @ViewChild('menuCard') menuCard!: CardComponent;

  options = routesMainNav;

  isMobile = true;
  menuVisible = false;

  private sub: Subscription;

  constructor(private readonly screenBreakpoint: ScreenBreakpointAppService) {
    this.sub = this.screenBreakpoint.currentBreakpoint$.subscribe(breakpoint => {
      if (breakpoint === Breakpoints.XSmall) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
        this.menuVisible = false;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const { target } = event;
    if (this.hamburger && this.hamburger.self.self.nativeElement.contains(target)) {
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
