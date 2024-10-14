import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlButtonLinkModel } from '../../model/control/control-button-link.model';

export const buttonLinkControlStory: ControlButtonLinkModel = {
  kind: ControlKindEnum.buttonLink,
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
