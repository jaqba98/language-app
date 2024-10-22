import { ControlEnum } from '../../enum/control.enum';
import { ControlInputModel } from '../../model/control-input.model';

export const inputControlStory: ControlInputModel = {
  kind: ControlEnum.input,
  id: 'login',
  alignItems: 'stretch',
  validation: {
    validators: [],
    isVisible: false,
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
