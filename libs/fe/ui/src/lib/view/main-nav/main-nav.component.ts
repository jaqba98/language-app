import { Component, HostListener, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenBreakpointAppService } from '@english-learning/fe-system';
import { CardComponent } from '../../misc/card/card.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { PositionComponent } from '../../misc/position/position.component';
import { MainNavOptionsType } from './main-nav.model';
import { TextComponent } from "../../misc/text/text.component";
import { FlexComponent } from '../../misc/flex/flex.component';
import { Subscription } from 'rxjs';
import { Breakpoints } from '@angular/cdk/layout';

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
    FlexComponent
  ],
  templateUrl: './main-nav.component.html',
  providers: [
    { provide: ScreenBreakpointAppService }
  ]
})
export class MainNavComponent implements OnDestroy {
  @ViewChild('hamburger') hamburger!: ButtonIconComponent;
  @ViewChild('menuCard') menuCard!: CardComponent;

  @Input({ required: true }) options!: MainNavOptionsType;

  menuVisible = false;

  sub: Subscription;

  isMobile = true;

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
    if (this.hamburger && this.hamburger.button.button.nativeElement.contains(event.target)) {
      this.menuVisible = !this.menuVisible;
      return;
    }
    if (this.menuCard && this.menuCard.card.nativeElement.contains(event.target)) {
      this.menuVisible = true;
      return;
    }
    this.menuVisible = false;
  }
}
