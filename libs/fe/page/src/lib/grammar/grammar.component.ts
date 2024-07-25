import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FlexComponent, GrammarNavComponent } from "@english-learning/fe-ui";
import { Breakpoints } from '@angular/cdk/layout';
import { ScreenBreakpointAppService } from '@english-learning/fe-system';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    CommonModule,
    GrammarNavComponent,
    RouterOutlet,
    FlexComponent
],
  templateUrl: './grammar.component.html',
  providers: [
    { provide: ScreenBreakpointAppService }
  ]
})
export class GrammarComponent implements OnDestroy {
  isMobile = true;

  private sub: Subscription;

  constructor(private readonly screenBreakpoint: ScreenBreakpointAppService) {
    this.sub = this.screenBreakpoint.currentBreakpoint$.subscribe(breakpoint => {
      if (breakpoint === Breakpoints.XSmall) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
