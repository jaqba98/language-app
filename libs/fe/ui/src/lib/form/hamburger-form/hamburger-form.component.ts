import { Component } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';
import { EventEmitterDirective } from '../../base/event-emitter.directive';

@Component({
  selector: 'lib-hamburger-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './hamburger-form.component.html',
})
export class HamburgerFormComponent extends EventEmitterDirective<boolean> {
  form: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonIcon,
        id: 'submit',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        icon: 'bars',
        color: 'default',
        type: 'button',
      },
    ],
  };

  onSubmit() {
    this.emit(true);
  }
}
