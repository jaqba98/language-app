import { ObserverModel } from './observer.model';

export interface SubjectModel<TData> {
  observers: Map<ObserverModel<TData>, ObserverModel<TData>>;

  addObserver(obs: ObserverModel<TData>): void;

  removeObserver(obs: ObserverModel<TData>): void;

  notifyObservers(data: TData): void;
}
