import { Injectable } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ScreenBreakpointAppService {
  currentBreakpoint$ = new BehaviorSubject<string>('');
  
  constructor(private readonly breakpoint: BreakpointObserver) {
    this.breakpoint.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      const breakpoints = result.breakpoints
      const matched = Object.entries(Breakpoints)
        .map(([key, value]) => ({ key, value, isMatched: breakpoints[value] }))
        .filter(item => item.isMatched)
        .find(item => item.key)?.value ?? '';
      this.currentBreakpoint$.next(matched);
    });
  }
}
