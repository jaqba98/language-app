import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { ForgotPasswordFormModel } from '@english-learning/fe-form';
import { ControlEnum } from '@english-learning/fe-component';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';

@Component({
  selector: 'lib-forgot-password-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './forgot-password-form.component.html',
})
export class ForgotPasswordFormComponent {
  @Output() event = new EventEmitter<ForgotPasswordFormModel>();

  forgotPasswordForm: BaseFormModel<ForgotPasswordFormModel> = {
    controls: {
      tip: {
        kind: ControlEnum.text,
        id: 'tip',
        alignItems: 'flexStart',
        validation: {
          validators: [],
          isVisible: true,
        },
        value:
          'Lost your password? Please enter your email address. You will receive a link to create a new password via email.',
        margin: '1rem 0',
      },
      email: {
        kind: ControlEnum.input,
        id: 'email',
        alignItems: 'flexStart',
        validation: {
          validators: [Validators.required, Validators.email],
          isVisible: true,
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
      submit: {
        kind: ControlEnum.buttonText,
        id: 'submit',
        alignItems: 'flexStart',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Reset password',
        type: 'submit',
      },
    },
  };

  onBaseFormEvent(model: ForgotPasswordFormModel) {
    this.event.emit(model);
  }
}
