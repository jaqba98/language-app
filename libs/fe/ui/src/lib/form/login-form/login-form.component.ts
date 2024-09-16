// Done
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

  loginForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.input,
        id: 'email',
        alignItems: 'stretch',
        validation: {
          validators: [Validators.required, Validators.email],
          isVisible: false,
        },
        label: {
          value: 'Email',
          isVisible: true,
        },
        input: {
          defaultValue: '',
          placeholder: '',
          type: 'text',
        },
      },
      {
        kind: ControlKindEnum.input,
        id: 'password',
        alignItems: 'stretch',
        validation: {
          validators: [Validators.required],
          isVisible: false,
        },
        label: {
          value: 'Password',
          isVisible: true,
        },
        input: {
          defaultValue: '',
          placeholder: '',
          type: 'password',
        },
      },
      {
        kind: ControlKindEnum.link,
        id: 'forgotPassword',
        alignItems: 'flex-end',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Forgot password?',
        path: '/forgot-password',
        tip: '',
      },
      {
        kind: ControlKindEnum.buttonText,
        id: 'submit',
        alignItems: 'flex-start',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Log in',
        isSubmit: true,
      },
      {
        kind: ControlKindEnum.link,
        id: 'registration',
        alignItems: 'flex-start',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Registration',
        path: '/registration',
        tip: "Don't have an account?",
      },
    ],
  };

  onBaseFormEvent(model: LoginFormModel) {
    this.event.emit(model);
  }
}
