import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';
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
        kind: ControlKindEnum.input,
        id: 'password',
        alignItems: 'stretch',
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
        kind: ControlKindEnum.input,
        id: 'repeatPassword',
        alignItems: 'stretch',
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
        kind: ControlKindEnum.buttonText,
        id: 'submit',
        alignItems: 'flex-start',
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
