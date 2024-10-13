import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { RegistrationFormModel } from './registration-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';

@Component({
  selector: 'lib-registration-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent {
  @Output() event = new EventEmitter<RegistrationFormModel>();

  registrationForm: BaseFormModel = {
    controls: {
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
      name: {
        kind: ControlKindEnum.input,
        id: 'name',
        alignItems: 'stretch',
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
        kind: ControlKindEnum.buttonText,
        id: 'submit',
        alignItems: 'flex-start',
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
