import {
  FontAwesomeColorType,
  FontAwesomeKindType,
} from '../../external/font-awesome/font-awesome.type';
import { ButtonKindType } from '../base/button/button.type';
import { ControlEnum } from '../enum/control.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlButtonIconModel extends ControlBaseModel {
  kind: ControlEnum.buttonIcon;
  icon: FontAwesomeKindType;
  color: FontAwesomeColorType;
  type: ButtonKindType;
}
