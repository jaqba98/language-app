import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { ControlEnum } from '@english-learning/fe-component';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { ChangePasswordFormModel } from './change-password-form.model';

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
        alignItems: 'left',
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
        alignItems: 'left',
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
        alignItems: 'left',
        validation: {
          validators: [],
          isVisible: false,
        },
        label: 'Change password',
        type: 'submit',
        fullWidth: false,
      },
    },
  };

  onBaseFormEvent(model: ChangePasswordFormModel) {
    this.event.emit(model);
  }
}
