import { BreakpointEnum } from '../../enum/breakpoint.enum';
import { ObserverModel } from '../abstract/observer.model';

export interface BreakpointModel {
  breakpoint: BreakpointEnum;
}

export type BreakpointObserverType = ObserverModel<BreakpointModel>;
