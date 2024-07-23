import { Injectable } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { BehaviorSubject } from "rxjs";

import { breakpoints } from "../const/breakpoints.const";

@Injectable()
export class ScreenBreakpointAppService {
  currentBreakpoint$ = new BehaviorSubject<string>(Breakpoints.XSmall);
  
  constructor(private readonly breakpoint: BreakpointObserver) {
    this.breakpoint.observe(breakpoints).subscribe(currBreakpoint => {
      const matched = breakpoints
        .map(([key, value]) => ({
          key,
          value,
          isMatched: currBreakpoint.breakpoints[value]
        }))
        .filter(item => item.isMatched)
        .find(item => item.key)?.value ?? '';
      this.currentBreakpoint$.next(matched);
    });
  }
}
