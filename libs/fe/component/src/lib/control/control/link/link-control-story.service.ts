import { ControlEnum } from '../../enum/control.enum';
import { ControlLinkModel } from '../../model/control-link.model';

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
