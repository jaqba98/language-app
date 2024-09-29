import { Directive, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { StoreModel } from '@english-learning/fe-store';
import { ComponentDirective } from './component.directive';

@Directive()
export class BusinessDirective<
  T extends keyof StoreModel,
  TEvent,
> extends ComponentDirective<TEvent> {
  private readonly store: Store<StoreModel>;

  private sub?: Subscription;

  constructor(
    protected override readonly injector: Injector,
    protected readonly select: T,
  ) {
    super(injector);
    this.store = this.injector.get(Store<StoreModel>);
  }

  protected override afterInit() {
    this.sub = this.store
      .select(this.select)
      .subscribe(store => this.onStoreAction(store));
  }

  protected onStoreAction(_store: StoreModel[T]) {
    throw new Error('Method not implemented.');
  }

  protected override afterDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
