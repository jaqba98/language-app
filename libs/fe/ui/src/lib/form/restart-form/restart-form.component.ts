import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum } from '../base-form/base-form.model';
import { RestartFormModel } from './restart-form.model';

@Component({
  selector: 'lib-restart-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './restart-form.component.html',
})
export class RestartNavFormComponent {
  @Output() restartFormEvent = new EventEmitter<RestartFormModel>();

  restartForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonText,
        name: 'restart',
        label: 'Restart',
        isPrimary: false,
      },
    ],
  };

  onEvent(baseForm: RestartFormModel) {
    this.restartFormEvent.emit(baseForm);
  }
}
