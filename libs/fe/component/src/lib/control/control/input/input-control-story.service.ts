import { Validators } from '@angular/forms';
import { ControlEnum } from '../../enum/control.enum';
import { ControlInputModel } from '../../model/control-input.model';

export const inputControlStory: ControlInputModel = {
  kind: ControlEnum.input,
  id: 'login',
  alignItems: 'stretch',
  validation: {
    validators: [Validators.required],
    isVisible: true,
  },
  label: {
    value: 'Login',
    isVisible: true,
  },
  input: {
    value: '',
    placeholder: 'Enter your login',
    type: 'text',
  },
};
