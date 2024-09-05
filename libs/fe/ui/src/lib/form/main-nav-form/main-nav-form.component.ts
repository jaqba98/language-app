import { Component, EventEmitter, Output } from '@angular/core';
import { Properties } from 'csstype';

import {
  BreakpointEnum,
  BreakpointModel,
  BreakpointService,
  ObserverModel,
} from '@english-learning/fe-system';
import { BaseFormComponent } from '../base-form/base-form.component';
import {
  BaseFormModel,
  ControlKindEnum,
} from '../base-form/base-form.model';
import { MainNavFormModel } from './main-nav-form.model';
import { RouteNavigationService } from '../../infrastructure/route-navigation.service';
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

  constructor(
    private readonly route: RouteNavigationService,
    private readonly breakpoint: BreakpointService,
  ) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.flexDirection = 'column';
    } else {
      this.flexDirection = 'row';
    }
  }

  form: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonText,
        name: 'homeButton',
        label: 'Home',
        isPrimary: false,
        validators: [],
        showValidation: true,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'vocabularyButton',
        label: 'Vocabulary',
        isPrimary: false,
        validators: [],
        showValidation: true,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'grammarButton',
        label: 'Grammar',
        isPrimary: false,
        validators: [],
        showValidation: true,
      },
    ],
  };

  onEvent(model: MainNavFormModel) {
    if (model.homeButton) this.route.navigate('/home');
    else if (model.vocabularyButton)
      this.route.navigate('/vocabulary');
    else if (model.grammarButton) this.route.navigate('/grammar');
    else throw new Error('No route is set to true!');
    this.mainNavFormEvent.emit();
  }
}
