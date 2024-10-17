import { ControlEnum } from '../enum/control.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlLinkModel extends ControlBaseModel {
  kind: ControlEnum.link;
  label: string;
  path: string;
}
