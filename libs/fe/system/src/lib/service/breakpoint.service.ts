import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { SubjectModel } from '../model/abstract/subject.model';
import { BreakpointModel } from '../model/context/breakpoint.model';
import { BreakpointEnum } from '../enum/breakpoint.enum';
import { ObserverModel } from '../model/abstract/observer.model';

@Injectable({ providedIn: 'root' })
export class BreakpointService implements SubjectModel<BreakpointModel> {
  observers: Map<ObserverModel<BreakpointModel>, ObserverModel<BreakpointModel>> = new Map();

  constructor(private readonly observer: BreakpointObserver) {
    this.observer.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe((currentBreakpoint) => {
      if (currentBreakpoint.breakpoints[Breakpoints.XSmall]) {
        this.notifyObservers({ breakpoint: BreakpointEnum.XSmall });
      } else if (currentBreakpoint.breakpoints[Breakpoints.Small]) {
        this.notifyObservers({ breakpoint: BreakpointEnum.Small });
      } else if (currentBreakpoint.breakpoints[Breakpoints.Medium]) {
        this.notifyObservers({ breakpoint: BreakpointEnum.Medium });
      } else if (currentBreakpoint.breakpoints[Breakpoints.Large]) {
        this.notifyObservers({ breakpoint: BreakpointEnum.Large });
      } else if (currentBreakpoint.breakpoints[Breakpoints.XLarge]) {
        this.notifyObservers({ breakpoint: BreakpointEnum.XLarge });
      }
    });
  }

  addObserver(obs: ObserverModel<BreakpointModel>): void {
    if (this.observers.has(obs)) {
      throw new Error('Object is already registered!');
    }
    this.observers.set(obs, obs);
  }

  removeObserver(obs: ObserverModel<BreakpointModel>): void {
    if (this.observers.has(obs)) {
      this.observers.delete(obs);
      return;
    }
    throw new Error('Object is not registered!');
  }

  notifyObservers(breakpoint: BreakpointModel): void {
    this.observers.forEach((obs) => {
      obs.update(breakpoint);
    });
  }
}
