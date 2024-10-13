import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ForgotPasswordFormModel } from './forgot-password-form.model';

@Component({
  selector: 'lib-forgot-password-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './forgot-password-form.component.html',
})
export class ForgotPasswordFormComponent {
  @Output() event = new EventEmitter<ForgotPasswordFormModel>();

  forgotPasswordForm: BaseFormModel = {
    controls: {
      tip: {
        kind: ControlKindEnum.text,
        id: 'tip',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: true,
        },
        value:
          'Lost your password? Please enter your email address. You will receive a link to create a new password via email.',
        margin: '1rem 0',
      },
      email: {
        kind: ControlKindEnum.input,
        id: 'email',
        alignItems: 'stretch',
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
        kind: ControlKindEnum.buttonText,
        id: 'submit',
        alignItems: 'flex-start',
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
