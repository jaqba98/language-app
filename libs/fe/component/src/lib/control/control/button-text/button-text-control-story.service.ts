import { ButtonKindType } from '../../base/button/button.type';
import { ControlEnum } from '../../enum/control.enum';
import { ControlButtonTextModel } from '../../model/control-button-text.model';

export const buttonTextControlStory = (type: ButtonKindType): ControlButtonTextModel => ({
  kind: ControlEnum.buttonText,
  id: 'button-text',
  alignItems: 'left',
  validation: {
    validators: [],
    isVisible: false,
  },
  label: 'Click me!',
  type,
});
