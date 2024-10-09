import { Component } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { DashboardNavFormModel } from './dashboard-nav-form.model';
import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { ControlKindEnum } from '../../enum/control-kind.enum';

@Component({
  selector: 'lib-dashboard-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './dashboard-nav-form.component.html',
})
export class DashboardNavFormComponent extends EventEmitterDirective<DashboardNavFormModel> {
  form: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonText,
        id: 'link1',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: true,
        },
        label: 'Link1',
        type: 'button',
      },
      {
        kind: ControlKindEnum.buttonText,
        id: 'link2',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: true,
        },
        label: 'Link2',
        type: 'button',
      },
      {
        kind: ControlKindEnum.buttonText,
        id: 'link3',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: true,
        },
        label: 'Link3',
        type: 'button',
      },
      {
        kind: ControlKindEnum.buttonText,
        id: 'link4',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: true,
        },
        label: 'Link4',
        type: 'button',
      },
    ],
  };

  onSubmit(event: DashboardNavFormModel) {
    this.emit(event);
  }
}
