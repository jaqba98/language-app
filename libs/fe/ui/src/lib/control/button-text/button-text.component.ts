import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../button/button.component';
import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { TextComponent } from '../../misc/text/text.component';
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

  onEvent(eventData: boolean) {
    this.emit(eventData);
  }
}
