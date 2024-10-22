import { ControlEnum } from '../../enum/control.enum';
import { ControlButtonLinkModel } from '../../model/control-button-link.model';

export const buttonLinkControlStory: ControlButtonLinkModel = {
  kind: ControlEnum.buttonLink,
  id: 'button-link',
  alignItems: 'center',
  validation: {
    validators: [],
    isVisible: false,
  },
  label: 'Link1',
  path: '/',
};
