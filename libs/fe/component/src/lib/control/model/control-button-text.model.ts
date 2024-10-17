import { ButtonKindType } from '../base/button/button.type';
import { ControlEnum } from '../enum/control.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlButtonTextModel extends ControlBaseModel {
  kind: ControlEnum.buttonText;
  label: string;
  type: ButtonKindType;
}
