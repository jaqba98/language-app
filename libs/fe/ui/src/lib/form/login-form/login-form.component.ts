import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { LoginFormModel } from './login-form.model';
import {
  BaseFormModel,
  ControlKindEnum,
} from '../base-form/base-form.model';

@Component({
  selector: 'lib-login-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @Output() event = new EventEmitter<LoginFormModel>();

  form: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.input,
        name: 'email',
        defaultValue: '',
        placeholder: 'Email',
      },
      {
        kind: ControlKindEnum.input,
        name: 'password',
        defaultValue: '',
        placeholder: 'Password',
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'submit',
        label: 'Log in',
        fullWidth: false,
        isPrimary: true,
      },
    ],
  };

  onEvent(baseForm: LoginFormModel) {
    this.event.emit(baseForm);
  }
}
