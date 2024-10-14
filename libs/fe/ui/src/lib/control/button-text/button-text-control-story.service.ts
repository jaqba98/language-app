import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { ButtonType } from '../button/button.type';

export const buttonTextControlStory = (type: ButtonType): ControlButtonTextModel => ({
  kind: ControlKindEnum.buttonText,
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
