import { Directive, Input, HostListener, Injector } from '@angular/core';

import { EventEmitterDirective } from '../base/event-emitter.directive';

@Directive({
  selector: '[libClickAction]',
  standalone: true,
})
/**
 * Click Action Directive
 */
export class ClickActionDirective<TEvent> extends EventEmitterDirective<TEvent> {
  @Input('libClickAction') eventData!: TEvent;

  constructor(protected override readonly injector: Injector) {
    super(injector, '');
  }

  @HostListener('click') onClick() {
    this.emit(this.eventData);
  }
}
