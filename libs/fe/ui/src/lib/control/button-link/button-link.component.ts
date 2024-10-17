import { Component, Injector, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { EventEmitterDirective } from '@english-learning/fe-system';
import { ButtonComponent, TextComponent } from '@english-learning/fe-component';
import { ControlButtonLinkModel } from '../../model/control/control-button-link.model';
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
