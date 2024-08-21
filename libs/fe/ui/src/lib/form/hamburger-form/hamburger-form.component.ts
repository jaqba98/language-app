import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum } from '../base-form/base-form.model';
import { HamburgerFormModel } from './hamburger-form.model';

@Component({
  selector: 'lib-hamburger-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './hamburger-form.component.html',
})
export class HamburgerFormComponent {
  @Output() hamburgerFormEvent = new EventEmitter<HamburgerFormModel>();

  hamburgerForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonIcon,
        name: 'submit',
        icon: 'icon/menu.svg',
        alt: 'hamburger icon',
        isPrimary: true,
      },
    ],
  };

  onEvent(baseForm: HamburgerFormModel) {
    this.hamburgerFormEvent.emit(baseForm);
  }
}
