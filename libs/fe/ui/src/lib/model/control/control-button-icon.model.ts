import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlButtonIconModel extends ControlBaseModel {
  kind: ControlKindEnum.buttonIcon;
  icon: string;
  alt: string;
  isSubmit: boolean;
}
