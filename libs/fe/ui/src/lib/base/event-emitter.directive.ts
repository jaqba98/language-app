import { Directive, EventEmitter, Injector, Output } from '@angular/core';

import { ComponentDirective } from './component.directive';

@Directive()
export class EventEmitterDirective<TEvent> extends ComponentDirective {
  @Output() event = new EventEmitter<TEvent>();

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  protected emit(data: TEvent) {
    this.beforeEmit();
    this.event.emit(data);
    this.afterEmit();
  }

  protected beforeEmit() {}

  protected afterEmit() {}
}
