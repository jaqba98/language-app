import { Directive, Input, HostListener } from '@angular/core';

import { EventEmitterDirective } from '../base/event-emitter.directive';

@Directive({
  selector: '[libClickAction]',
  standalone: true,
})
export class ClickActionDirective<TEvent> extends EventEmitterDirective<TEvent> {
  @Input('libClickAction') eventData!: TEvent;

  @HostListener('click') onClick() {
    this.emit(this.eventData);
  }
}
