import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseFormModel, RegistrationFormModel } from '@english-learning/fe-form';
import { ControlEnum } from '@english-learning/fe-component';
import { BaseFormComponent } from '../base-form/base-form.component';

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
      name: {
        kind: ControlEnum.input,
        id: 'name',
        alignItems: 'flexStart',
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
        alignItems: 'flexStart',
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
