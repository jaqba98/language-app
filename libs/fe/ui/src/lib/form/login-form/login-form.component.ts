import { Component, Injector } from '@angular/core';

import {
  BaseFormComponent,
  BaseFormModel,
  LoginFormModel,
} from '@english-learning/fe-form';
import { EventEmitterDirective } from '@english-learning/fe-system';
import { ControlEnum } from '@english-learning/fe-component';

@Component({
  selector: 'lib-login-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './login-form.component.html',
})
/**
 * Login Form Component
 */
export class LoginFormComponent extends EventEmitterDirective<LoginFormModel> {
  form: BaseFormModel<LoginFormModel> = {
    controls: {
      email: {
        kind: ControlEnum.input,
        id: 'email',
        alignItems: 'stretch',
        validation: {
          validators: [],
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
        kind: ControlEnum.input,
        id: 'password',
        alignItems: 'stretch',
        validation: {
          validators: [],
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
        kind: ControlEnum.link,
        id: 'forgotPassword',
        alignItems: 'flexEnd',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Forgot password?',
        path: '/forgot-password',
      },
      submit: {
        kind: ControlEnum.buttonText,
        id: 'submit',
        alignItems: 'flexStart',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Log In',
        type: 'submit',
      },
      registration: {
        kind: ControlEnum.link,
        id: 'registration',
        alignItems: 'center',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Sign up',
        path: '/registration',
      },
    },
  };

  constructor(protected override readonly injector: Injector) {
    super(injector, 'login-form');
  }

  onEvent(eventData: LoginFormModel) {
    this.emit(eventData);
  }
}
