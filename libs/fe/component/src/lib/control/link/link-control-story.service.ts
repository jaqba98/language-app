import { ControlLinkModel } from '../model/control-link.model';
import { ControlEnum } from '../enum/control.enum';

export const linkControlStory: ControlLinkModel = {
  kind: ControlEnum.link,
  id: 'link',
  alignItems: 'left',
  validation: {
    validators: [],
    isVisible: false,
  },
  label: 'Link1',
  path: '/',
};
