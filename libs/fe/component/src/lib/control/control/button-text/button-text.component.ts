import { Component, Input, Injector } from '@angular/core';

import { EventEmitterDirective } from '@english-learning/fe-system';
import { TextComponent } from '../../../misc/text/text.component';
import { ButtonComponent } from '../../base/button/button.component';
import { ControlButtonTextModel } from '../../model/control-button-text.model';

@Component({
  selector: 'lib-button-text',
  standalone: true,
  imports: [ButtonComponent, TextComponent],
  templateUrl: './button-text.component.html',
})
export class ButtonTextComponent extends EventEmitterDirective<boolean> {
  @Input({ required: true }) control!: ControlButtonTextModel;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'button-text');
  }

  onClick() {
    this.emit(true);
  }
}
