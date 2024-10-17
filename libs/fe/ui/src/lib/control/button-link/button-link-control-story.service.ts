import { ControlEnum } from '@english-learning/fe-component';
import { ControlButtonLinkModel } from '../../model/control/control-button-link.model';

export const buttonLinkControlStory: ControlButtonLinkModel = {
  kind: ControlEnum.buttonLink,
  id: 'button-link',
  alignItems: 'left',
  validation: {
    validators: [],
    isVisible: true,
  },
  label: 'Link1',
  path: '/',
  fullWidth: false,
};
