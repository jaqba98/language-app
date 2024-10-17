import { ControlEnum } from '@english-learning/fe-component';
import { ControlInputModel } from '../../model/control/control-input.model';

export const inputControlStory: ControlInputModel = {
  kind: ControlEnum.input,
  id: 'login',
  alignItems: 'left',
  validation: {
    validators: [],
    isVisible: true,
  },
  label: {
    value: 'Login',
    isVisible: true,
  },
  input: {
    value: 'admin',
    placeholder: 'Enter your login',
    type: 'text',
  },
};
