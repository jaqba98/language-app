import { Component, Injector, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TextComponent } from '@english-learning/fe-component';
import { ControlButtonLinkModel } from '../../model/control/control-button-link.model';
import { ButtonComponent } from '../button/button.component';
import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { DisplayContentsDirective } from '../../base/display-contents.directive';

@Component({
  selector: 'lib-button-link',
  standalone: true,
  imports: [RouterLink, ButtonComponent, TextComponent, DisplayContentsDirective],
  templateUrl: './button-link.component.html',
  hostDirectives: [DisplayContentsDirective],
})
/**
 * Button Link Component
 */
export class ButtonLinkComponent extends EventEmitterDirective<boolean> {
  @Input({ required: true }) control!: ControlButtonLinkModel;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'button-link');
  }
}
