import { Component, Input, Injector } from '@angular/core';

import { EventEmitterDirective } from '@english-learning/fe-system';
import { FontAwesomeComponent } from '../../../external/font-awesome/font-awesome.component';
import { ButtonComponent } from '../../base/button/button.component';
import { ControlButtonIconModel } from '../../model/control-button-icon.model';

@Component({
  selector: 'lib-button-icon',
  standalone: true,
  imports: [ButtonComponent, FontAwesomeComponent],
  templateUrl: './button-icon.component.html',
})
export class ButtonIconComponent extends EventEmitterDirective<boolean> {
  @Input({ required: true }) control!: ControlButtonIconModel;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'button-icon');
  }

  onClick() {
    this.emit(true);
  }
}
