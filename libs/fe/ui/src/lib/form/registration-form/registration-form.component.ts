import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { ControlEnum } from '@english-learning/fe-component';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { RegistrationFormModel } from './registration-form.model';

@Component({
  selector: 'lib-registration-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent {
  @Output() event = new EventEmitter<RegistrationFormModel>();

  registrationForm: BaseFormModel<RegistrationFormModel> = {
    controls: {
      email: {
        kind: ControlEnum.input,
        id: 'email',
        alignItems: 'left',
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
      name: {
        kind: ControlEnum.input,
        id: 'name',
        alignItems: 'left',
        validation: {
          validators: [Validators.required],
          isVisible: true,
        },
        label: {
          value: 'Name',
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
          value: 'Repeat Password',
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
        label: 'Register',
        type: 'submit',
      },
    },
  };

  onBaseFormEvent(model: RegistrationFormModel) {
    this.event.emit(model);
  }
}
