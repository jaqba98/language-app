import { ObserverModel } from './observer.model';

export interface SubjectModel<TContext> {
  observers: Map<ObserverModel<TContext>, ObserverModel<TContext>>;

  addObserver(obs: ObserverModel<TContext>): void;

  removeObserver(obs: ObserverModel<TContext>): void;

  notifyObservers(data: TContext): void;
}
