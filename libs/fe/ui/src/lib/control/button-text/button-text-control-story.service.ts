import { ControlEnum } from '@english-learning/fe-component';
import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { ButtonType } from '../button/button.type';

export const buttonTextControlStory = (type: ButtonType): ControlButtonTextModel => ({
  kind: ControlEnum.buttonText,
  id: 'button-text',
  alignItems: 'left',
  validation: {
    validators: [],
    isVisible: true,
  },
  label: 'Click me!',
  type,
  fullWidth: false,
});
