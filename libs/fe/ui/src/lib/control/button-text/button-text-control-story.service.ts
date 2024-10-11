import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { ButtonType } from '../button/button.type';

const buttonTextControlStory = (type: ButtonType): ControlButtonTextModel => ({
  kind: ControlKindEnum.buttonText,
  id: 'button-text',
  alignItems: 'stretch',
  validation: {
    validators: [],
    isVisible: true,
  },
  label: 'Click me!',
  type,
});

export const buttonTextControlButtonStory = buttonTextControlStory('button');

export const buttonTextControlSubmitStory = buttonTextControlStory('submit');