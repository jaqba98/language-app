import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlButtonTextModel } from '../../model/control/control-button-text.model';

export const textControlStory: ControlButtonTextModel = {
  kind: ControlKindEnum.buttonText,
  id: 'button-text',
  alignItems: 'stretch',
  validation: {
    validators: [],
    isVisible: true,
  },
  label: 'Click me!',
  type: 'button',
};
