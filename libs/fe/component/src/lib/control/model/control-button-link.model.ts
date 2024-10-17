import { ControlEnum } from '../enum/control.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlButtonLinkModel extends ControlBaseModel {
  kind: ControlEnum.buttonLink;
  label: string;
  path: string;
}
