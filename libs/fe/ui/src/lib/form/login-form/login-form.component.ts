// Done
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
        validators: [Validators.required, Validators.email],
        control: new FormControl(),
      },
      {
        kind: ControlKindEnum.input,
        name: 'password',
        defaultValue: '',
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        validators: [Validators.required],
        control: new FormControl(),
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'submit',
        label: 'Log in',
        isPrimary: true,
        validators: [],
        control: new FormControl(),
      },
    ],
  };

  onBaseFormEvent(model: LoginFormModel) {
    this.loginFormEvent.emit(model);
  }
}
