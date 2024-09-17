import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlButtonLinkModel extends ControlBaseModel {
  kind: ControlKindEnum.buttonLink;
  label: string;
  path: string;
}
