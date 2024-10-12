import { Directive, Output, Injector, EventEmitter } from '@angular/core';

import { ComponentDirective } from './component.directive';

@Directive()
/**
 * Event Emitter Directive
 */
export class EventEmitterDirective<TEvent> extends ComponentDirective {
  @Output() event = new EventEmitter<TEvent>();

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  protected emit(eventData: TEvent) {
    this.event.emit(eventData);
  }
}
