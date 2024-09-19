// todo: refactor it
import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { HamburgerFormModel } from './hamburger-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';

@Component({
  selector: 'lib-hamburger-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './hamburger-form.component.html',
})
export class HamburgerFormComponent {
  @Output() hamburgerFormEvent =
    new EventEmitter<HamburgerFormModel>();

  hamburgerForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonIcon,
        id: 'submit',
        alignItems: 'flex-start',
        validation: {
          validators: [],
          isVisible: false,
        },
        icon: 'icon/menu.svg',
        alt: 'hamburger icon',
        isSubmit: false,
      },
    ],
  };

  onEvent(baseForm: HamburgerFormModel) {
    this.hamburgerFormEvent.emit(baseForm);
  }
}
