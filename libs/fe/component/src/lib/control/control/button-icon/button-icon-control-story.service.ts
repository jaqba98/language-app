import { ControlEnum } from '../../enum/control.enum';
import { ControlButtonIconModel } from '../../model/control-button-icon.model';

export const buttonIconControlStory: ControlButtonIconModel = {
  kind: ControlEnum.buttonIcon,
  id: 'button-icon',
  alignItems: 'left',
  validation: {
    validators: [],
    isVisible: false,
  },
  icon: 'bars',
  color: 'default',
  type: 'button',
};
