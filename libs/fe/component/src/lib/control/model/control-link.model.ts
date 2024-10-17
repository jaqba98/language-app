import { ControlBaseModel } from './control-base.model';
import { ControlEnum } from '../enum/control.enum';

export interface ControlLinkModel extends ControlBaseModel {
  kind: ControlEnum.link;
  label: string;
  path: string;
}
