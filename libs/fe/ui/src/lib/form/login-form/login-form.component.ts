// Done
import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import {
  BaseFormModel,
  ControlKindEnum,
} from '../base-form/base-form.model';
import { LoginFormModel } from './login-form.model';

@Component({
  selector: 'lib-login-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @Output() loginFormEvent = new EventEmitter<LoginFormModel>();

  loginForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.input,
        name: 'email',
        defaultValue: '',
        label: 'Email',
        placeholder: 'Email',
        type: 'text',
      },
      {
        kind: ControlKindEnum.input,
        name: 'password',
        defaultValue: '',
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
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

  onBaseFormEvent(model: LoginFormModel) {
    this.loginFormEvent.emit(model);
  }
}
