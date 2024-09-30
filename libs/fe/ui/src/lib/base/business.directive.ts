import { Directive, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { StoreModel, StoreType } from '@english-learning/fe-store';
import { methodNotImplemented, notDefined } from '@english-learning/fe-domain';
import { ComponentDirective } from './component.directive';

@Directive()
export class BusinessDirective<TEvent> extends ComponentDirective<TEvent> {
  private readonly store: Store<StoreModel>;

  private sub?: Subscription;

  constructor(
    protected override readonly injector: Injector,
    protected readonly select: StoreType,
  ) {
    super(injector);
    this.store = this.injector.get(Store<StoreModel>);
  }

  protected override afterInit() {
    this.sub = this.store.select('course').subscribe(store => this.onStoreChange(store));
  }

  protected onStoreChange(_store: StoreModel[StoreType]) {
    throw new Error(methodNotImplemented());
  }

  protected override afterDestroy() {
    if (!this.sub) throw new Error(notDefined('sub'));
    this.sub.unsubscribe();
  }
}
