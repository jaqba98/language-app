import { Component, Input } from '@angular/core';
import { Properties } from 'csstype';

import { ControlKindEnum } from '../../enum/control-kind.enum';
import { BaseFormModel } from '../../model/form/base-form.model';
import { BaseFormComponent } from '../base-form/base-form.component';
import { DashboardNavFormModel } from './dashboard-nav-form.model';

@Component({
  selector: 'lib-dashboard-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './dashboard-nav-form.component.html',
})
/**
 * Dashboard Nav Form Component
 */
export class DashboardNavFormComponent {
  @Input() flexDirection: Properties['flexDirection'] = 'row';

  form: BaseFormModel<DashboardNavFormModel> = {
    controls: {
      statistics: {
        kind: ControlKindEnum.buttonLink,
        id: 'statistics',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Statistics',
        path: '/statistics',
      },
      courses: {
        kind: ControlKindEnum.buttonLink,
        id: 'courses',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Courses',
        path: '/courses',
      },
      account: {
        kind: ControlKindEnum.buttonLink,
        id: 'account',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Account',
        path: '/account',
      },
      logout: {
        kind: ControlKindEnum.buttonLink,
        id: 'logout',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'logout',
        path: '/logout',
      },
    },
  };
}
