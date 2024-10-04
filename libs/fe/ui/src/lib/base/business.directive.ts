import { Directive, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { StoreModel, StoreType } from '@english-learning/fe-store';
import { EventEmitterDirective } from './event-emitter.directive';

@Directive()
export class BusinessDirective<TEvent> extends EventEmitterDirective<TEvent> {
  private sub?: Subscription;

  private readonly store: Store<StoreModel>;

  constructor(
    protected override readonly injector: Injector,
    protected readonly select: StoreType,
  ) {
    super(injector);
    this.store = this.injector.get(Store<StoreModel>);
  }

  protected override afterInit() {
    this.sub = this.store
      .select(this.select)
      .subscribe(store => this.onStoreChange(store));
  }

  protected onStoreChange(_store: StoreModel[StoreType]) {}

  protected override afterDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
