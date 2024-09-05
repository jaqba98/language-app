// Done
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

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
  @Output() event = new EventEmitter<LoginFormModel>();

  loginForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.input,
        name: 'email',
        validators: [Validators.required, Validators.email],
        showValidation: false,
        defaultValue: '',
        label: 'Email',
        placeholder: '',
        type: 'text',
      },
      {
        kind: ControlKindEnum.input,
        name: 'password',
        validators: [Validators.required],
        showValidation: false,
        defaultValue: '',
        label: 'Password',
        placeholder: '',
        type: 'password',
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'submit',
        validators: [],
        showValidation: false,
        label: 'Log in',
        isPrimary: true,
      },
    ],
  };

  onBaseFormEvent(model: LoginFormModel) {
    this.event.emit(model);
  }
}
