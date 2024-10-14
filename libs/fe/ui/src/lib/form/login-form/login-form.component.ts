import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { LoginFormModel } from './login-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';

@Component({
  selector: 'lib-login-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @Output() event = new EventEmitter<LoginFormModel>();

  loginForm: BaseFormModel<LoginFormModel> = {
    controls: {
      email: {
        kind: ControlKindEnum.input,
        id: 'email',
        alignItems: 'left',
        validation: {
          validators: [Validators.required, Validators.email],
          isVisible: false,
        },
        label: {
          value: 'Email',
          isVisible: true,
        },
        input: {
          value: '',
          placeholder: '',
          type: 'text',
        },
      },
      password: {
        kind: ControlKindEnum.input,
        id: 'password',
        alignItems: 'left',
        validation: {
          validators: [Validators.required],
          isVisible: false,
        },
        label: {
          value: 'Password',
          isVisible: true,
        },
        input: {
          value: '',
          placeholder: '',
          type: 'password',
        },
      },
      forgotPassword: {
        kind: ControlKindEnum.buttonLink,
        id: 'forgotPassword',
        alignItems: 'right',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Forgot password?',
        path: '/forgot-password',
        fullWidth: false,
      },
      submit: {
        kind: ControlKindEnum.buttonText,
        id: 'submit',
        alignItems: 'left',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Log in',
        type: 'submit',
        fullWidth: false,
      },
      registration: {
        kind: ControlKindEnum.buttonLink,
        id: 'registration',
        alignItems: 'left',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Registration',
        path: '/registration',
        fullWidth: false,
      },
    },
  };

  onBaseFormEvent(model: LoginFormModel) {
    this.event.emit(model);
  }
}
