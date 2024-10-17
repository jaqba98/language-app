import { Directive, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { StoreModel, StoreType } from '@english-learning/fe-store';
import { EventEmitterDirective } from '@english-learning/fe-system';

@Directive()
/**
 * Business Directive
 */
export class BusinessDirective<TEvent = undefined> extends EventEmitterDirective<TEvent> {
  private readonly store: Store<StoreModel>;

  private sub?: Subscription;

  constructor(
    protected override readonly injector: Injector,
    protected override readonly blockName: string,
    protected readonly select: StoreType,
  ) {
    super(injector, blockName);
    this.store = this.injector.get(Store<StoreModel>);
  }

  protected override afterInit() {
    this.beforeBusinessInit();
    this.sub = this.store
      .select(this.select)
      .subscribe(store => this.onStoreChange(store));
  }

  protected beforeBusinessInit() {}

  protected override afterDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  protected onStoreChange(_store: StoreModel[StoreType]) {
    // TODO: Add throw error if the metod is not implemented!
  }
}
