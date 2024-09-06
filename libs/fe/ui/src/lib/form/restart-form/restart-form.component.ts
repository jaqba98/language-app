import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { RestartFormModel } from './restart-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';

@Component({
  selector: 'lib-restart-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './restart-form.component.html',
})
export class RestartFormComponent {
  @Output() restartFormEvent = new EventEmitter<RestartFormModel>();

  restartForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonText,
        id: 'restart',
        label: 'Restart',
        isSubmit: false,
        validation: {
          validators: [],
          isVisible: true,
        },
      },
    ],
  };

  onEvent(baseForm: RestartFormModel) {
    this.restartFormEvent.emit(baseForm);
  }
}
