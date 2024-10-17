import { Component, Injector, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EventEmitterDirective } from '@english-learning/fe-system';
import { ButtonComponent } from '../../base/button/button.component';
import { TextComponent } from '../../../misc/text/text.component';
import { ControlButtonLinkModel } from '../../model/control-button-link.model';

@Component({
  selector: 'lib-button-link',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent, TextComponent],
  templateUrl: './button-link.component.html',
})
export class ButtonLinkComponent extends EventEmitterDirective<boolean> {
  @Input({ required: true }) control!: ControlButtonLinkModel;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'button-link');
  }
}
