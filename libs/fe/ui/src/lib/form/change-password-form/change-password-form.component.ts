import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import {
  BaseFormComponent,
  BaseFormModel,
  ChangePasswordFormModel,
} from '@english-learning/fe-form';
import { ControlEnum } from '@english-learning/fe-component';

@Component({
  selector: 'lib-change-password-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './change-password-form.component.html',
})
export class ChangePasswordFormComponent {
  @Output() event = new EventEmitter<ChangePasswordFormModel>();

  changePasswordForm: BaseFormModel<ChangePasswordFormModel> = {
    controls: {
      password: {
        kind: ControlEnum.input,
        id: 'password',
        alignItems: 'flexStart',
        validation: {
          validators: [Validators.required],
          isVisible: true,
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
      repeatPassword: {
        kind: ControlEnum.input,
        id: 'repeatPassword',
        alignItems: 'flexStart',
        validation: {
          validators: [Validators.required],
          isVisible: true,
        },
        label: {
          value: 'Repeate Password',
          isVisible: true,
        },
        input: {
          value: '',
          placeholder: '',
          type: 'password',
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
        label: 'Change password',
        type: 'submit',
      },
    },
  };

  onBaseFormEvent(model: ChangePasswordFormModel) {
    this.event.emit(model);
  }
}
