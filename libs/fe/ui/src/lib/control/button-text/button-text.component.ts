import { Component, Injector, Input } from '@angular/core';

import { ButtonComponent, TextComponent } from '@english-learning/fe-component';
import { EventEmitterDirective } from '@english-learning/fe-system';
import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { DisplayContentsDirective } from '../../base/display-contents.directive';

@Component({
  selector: 'lib-button-text',
  standalone: true,
  imports: [ButtonComponent, TextComponent],
  templateUrl: './button-text.component.html',
  hostDirectives: [DisplayContentsDirective],
})
/**
 * Button Text Component
 */
export class ButtonTextComponent extends EventEmitterDirective<boolean> {
  @Input({ required: true }) control!: ControlButtonTextModel;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'button-text');
  }

  onEvent(eventData: boolean) {
    this.emit(eventData);
  }
}
