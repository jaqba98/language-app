import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlLinkModel extends ControlBaseModel {
  kind: ControlKindEnum.link;
  label: string;
  path: string;
}
