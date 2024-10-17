import { Component, Injector, Input } from '@angular/core';

import { ControlEnum } from '@english-learning/fe-component';
import { ComponentDirective } from '@english-learning/fe-system';
import { DirectionType } from '@english-learning/shared-type';
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
export class DashboardNavFormComponent extends ComponentDirective {
  @Input() flexDirection: DirectionType = 'row';

  form!: BaseFormModel<DashboardNavFormModel>;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'dashboard-form');
  }

  protected override afterInit() {
    this.form = {
      controls: {
        statistics: {
          kind: ControlEnum.buttonLink,
          id: 'statistics',
          alignItems: 'left',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'Statistics',
          path: '/dashboard/statistics',
          fullWidth: this.flexDirection === 'column',
        },
        courses: {
          kind: ControlEnum.buttonLink,
          id: 'courses',
          alignItems: 'left',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'Courses',
          path: '/dashboard/courses',
          fullWidth: this.flexDirection === 'column',
        },
        account: {
          kind: ControlEnum.buttonLink,
          id: 'account',
          alignItems: 'left',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'Account',
          path: '/dashboard/account',
          fullWidth: this.flexDirection === 'column',
        },
        logout: {
          kind: ControlEnum.buttonLink,
          id: 'logout',
          alignItems: 'left',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'logout',
          path: '/',
          fullWidth: this.flexDirection === 'column',
        },
      },
    };
  }
}
