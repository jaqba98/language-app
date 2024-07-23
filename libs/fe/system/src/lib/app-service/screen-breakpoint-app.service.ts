import { Injectable } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { BehaviorSubject } from "rxjs";

import { screenBreakpoints } from "../const/screen-breakpoints.const";

@Injectable()
export class ScreenBreakpointAppService {
  currentBreakpoint$ = new BehaviorSubject<string>(Breakpoints.XSmall);
  
  constructor(private readonly breakpoint: BreakpointObserver) {
    this.breakpoint.observe(screenBreakpoints).subscribe(currBreakpoint => {
      const matched = Object.values(screenBreakpoints)
        .map(key => ({ key, isMatched: currBreakpoint.breakpoints[key] }))
        .filter(item => item.isMatched)
        .find(item => item.key)?.key ?? '';
      this.currentBreakpoint$.next(matched);
    });
  }
}
