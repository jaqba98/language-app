import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlButtonIconModel } from '../../model/control/control-button-icon.model';

export const buttonIconControlStory: ControlButtonIconModel = {
  kind: ControlKindEnum.buttonIcon,
  id: 'button-icon',
  alignItems: 'stretch',
  validation: {
    validators: [],
    isVisible: true,
  },
  icon: 'bars',
  color: 'default',
  type: 'button',
};
