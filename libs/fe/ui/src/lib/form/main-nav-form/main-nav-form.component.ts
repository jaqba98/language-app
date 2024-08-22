import { Component } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum } from '../base-form/base-form.model';
import { MainNavFormModel } from './main-nav-form.model';
import { RouteNavigationService } from '../../infrastructure/route-navigation.service';

@Component({
  selector: 'lib-main-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './main-nav-form.component.html',
})
export class MainNavFormComponent {
  constructor(private readonly route: RouteNavigationService) {}

  form: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonText,
        name: 'homeButton',
        label: 'Home',
        isPrimary: false,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'vocabularyButton',
        label: 'Vocabulary',
        isPrimary: false,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'grammarButton',
        label: 'Grammar',
        isPrimary: false,
      },
    ],
  };

  onEvent(model: MainNavFormModel) {
    if (model.home) this.route.navigate('/home');
    else if (model.vocabulary) this.route.navigate('/vocabulary');
    else if (model.grammar) this.route.navigate('/grammar');
    throw new Error('No route is set to true!');
  }
}
