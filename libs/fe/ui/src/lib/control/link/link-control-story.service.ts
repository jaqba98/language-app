import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlLinkModel } from '../../model/control/control-link.model';

export const linkControlStory: ControlLinkModel = {
  kind: ControlKindEnum.link,
  id: 'link',
  alignItems: 'left',
  validation: {
    validators: [],
    isVisible: true,
  },
  label: 'Link1',
  path: '/',
  leftTip: 'Left tip',
  rightTip: 'Right tip',
};
