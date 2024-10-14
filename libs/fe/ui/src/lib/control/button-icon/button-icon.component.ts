import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../button/button.component';
import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { FontAwesomeComponent } from '../../external/font-awesome/font-awesome.component';
import { ControlButtonIconModel } from '../../model/control/control-button-icon.model';
import { DisplayContentsDirective } from '../../base/display-contents.directive';

@Component({
  selector: 'lib-button-icon',
  standalone: true,
  imports: [ButtonComponent, FontAwesomeComponent],
  templateUrl: './button-icon.component.html',
  hostDirectives: [DisplayContentsDirective],
})
/**
 * Button Icon Component
 */
export class ButtonIconComponent extends EventEmitterDirective<boolean> {
  @Input({ required: true }) control!: ControlButtonIconModel;

  onEvent(eventData: boolean) {
    this.emit(eventData);
  }
}
