import { ButtonType } from '../../control/button/button.type';
import { ControlKindEnum } from '../../enum/control-kind.enum';
import {
  FontAwesomeColorType,
  FontAwesomeType,
} from '../../external/font-awesome/font-awesome.type';
import { ControlBaseModel } from './control-base.model';

export interface ControlButtonIconModel extends ControlBaseModel {
  kind: ControlKindEnum.buttonIcon;
  icon: FontAwesomeType;
  color: FontAwesomeColorType;
  type: ButtonType;
  fullWidth: boolean;
}
