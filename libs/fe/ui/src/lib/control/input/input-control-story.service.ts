import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlInputModel } from '../../model/control/control-input.model';

export const inputControlStory: ControlInputModel = {
  kind: ControlKindEnum.input,
  id: 'login',
  alignItems: 'stretch',
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
