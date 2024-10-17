import { Component, Injector } from '@angular/core';

import { ControlKindEnum } from '../../enum/control-kind.enum';
import { BaseFormModel } from '../../model/form/base-form.model';
import { BaseFormComponent } from '../base-form/base-form.component';
import { LoginFormModel } from './login-form.model';
import { EventEmitterDirective } from '../../base/event-emitter.directive';

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
        kind: ControlKindEnum.input,
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
        kind: ControlKindEnum.input,
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
        kind: ControlKindEnum.link,
        id: 'forgotPassword',
        alignItems: 'right',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Forgot password?',
        path: '/forgot-password',
        leftTip: '',
        rightTip: '',
      },
      submit: {
        kind: ControlKindEnum.buttonText,
        id: 'submit',
        alignItems: 'left',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Log In',
        type: 'submit',
        fullWidth: false,
      },
      registration: {
        kind: ControlKindEnum.link,
        id: 'registration',
        alignItems: 'left',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Sign up',
        path: '/registration',
        leftTip: 'Do not have an account?',
        rightTip: '',
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
