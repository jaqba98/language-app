import { Component, Injector, Input } from '@angular/core';

import { ControlEnum, FlexDirectionType } from '@english-learning/fe-component';
import { ComponentDirective } from '@english-learning/fe-system';
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
  @Input() flexDirection: FlexDirectionType = 'row';

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
          alignItems: 'flexStart',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'Statistics',
          path: '/dashboard/statistics',
        },
        courses: {
          kind: ControlEnum.buttonLink,
          id: 'courses',
          alignItems: 'flexStart',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'Courses',
          path: '/dashboard/courses',
        },
        account: {
          kind: ControlEnum.buttonLink,
          id: 'account',
          alignItems: 'flexStart',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'Account',
          path: '/dashboard/account',
        },
        logout: {
          kind: ControlEnum.buttonLink,
          id: 'logout',
          alignItems: 'flexStart',
          validation: {
            validators: [],
            isVisible: false,
          },
          label: 'logout',
          path: '/',
        },
      },
    };
  }
}
