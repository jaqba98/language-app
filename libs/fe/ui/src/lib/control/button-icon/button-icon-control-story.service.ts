import { ControlEnum } from '@english-learning/fe-component';
import { ControlButtonIconModel } from '../../model/control/control-button-icon.model';

export const buttonIconControlStory: ControlButtonIconModel = {
  kind: ControlEnum.buttonIcon,
  id: 'button-icon',
  alignItems: 'left',
  validation: {
    validators: [],
    isVisible: true,
  },
  icon: 'bars',
  color: 'default',
  type: 'button',
  fullWidth: false,
};
