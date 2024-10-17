import { ButtonKindType, ControlEnum } from '@english-learning/fe-component';
import { ControlButtonTextModel } from '../../model/control/control-button-text.model';

export const buttonTextControlStory = (type: ButtonKindType): ControlButtonTextModel => ({
  kind: ControlEnum.buttonText,
  id: 'button-text',
  alignItems: 'left',
  validation: {
    validators: [],
    isVisible: true,
  },
  label: 'Click me!',
  type,
});
