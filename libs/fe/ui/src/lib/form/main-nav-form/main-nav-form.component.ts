import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum } from '../base-form/base-form.model';
import { MainNavFormModel } from './main-nav-form.model';

@Component({
  selector: 'lib-main-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './main-nav-form.component.html',
})
export class MainNavFormComponent {
  @Output() mainNavFormEvent = new EventEmitter<MainNavFormModel>();

  mainNavForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonText,
        name: 'home',
        label: 'Home',
        isPrimary: false,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'vocabulary',
        label: 'Vocabulary',
        isPrimary: false,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'grammar',
        label: 'Grammar',
        isPrimary: false,
      },
    ],
  };

  onEvent(baseForm: MainNavFormModel) {
    this.mainNavFormEvent.emit(baseForm);
  }
}
