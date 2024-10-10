import { Component, Input } from '@angular/core';
import { Properties } from 'csstype';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';

@Component({
  selector: 'lib-dashboard-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './dashboard-nav-form.component.html',
})
export class DashboardNavFormComponent {
  @Input() formDirection: Properties['flexDirection'] = 'column';

  form: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonLink,
        id: 'link1',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: true,
        },
        label: 'Link1',
        path: '/link1',
      },
      {
        kind: ControlKindEnum.buttonLink,
        id: 'link2',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: true,
        },
        label: 'Link2',
        path: '/link2',
      },
      {
        kind: ControlKindEnum.buttonLink,
        id: 'link3',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: true,
        },
        label: 'Link3',
        path: '/link3',
      },
      {
        kind: ControlKindEnum.buttonLink,
        id: 'link4',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: true,
        },
        label: 'Link4',
        path: '/link4',
      },
    ],
  };
}
