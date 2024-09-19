import { Component, EventEmitter, Output } from '@angular/core';
import { Properties } from 'csstype';

import {
  BreakpointEnum,
  BreakpointModel,
  BreakpointService,
  ObserverModel,
} from '@english-learning/fe-system';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';
import { HamburgerFormModel } from '../hamburger-form/hamburger-form.model';

@Component({
  selector: 'lib-main-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './main-nav-form.component.html',
})
export class MainNavFormComponent
  implements ObserverModel<BreakpointModel>
{
  @Output() mainNavFormEvent = new EventEmitter<HamburgerFormModel>();

  flexDirection: Properties['flexDirection'] = 'row';

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.flexDirection = 'column';
    } else {
      this.flexDirection = 'row';
    }
  }

  mainNavForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonLink,
        id: 'statistics',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Statistics',
        path: '/dashboard/statistics',
      },
      {
        kind: ControlKindEnum.buttonLink,
        id: 'courses',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Courses',
        path: '/dashboard/courses',
      },
      {
        kind: ControlKindEnum.buttonLink,
        id: 'account',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Account',
        path: '/dashboard/account',
      },
      {
        kind: ControlKindEnum.buttonLink,
        id: 'logout',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Logout',
        path: '/dashboard/logout',
      },
    ],
  };

  onEvent(baseForm: HamburgerFormModel) {
    this.mainNavFormEvent.emit(baseForm);
  }
}
