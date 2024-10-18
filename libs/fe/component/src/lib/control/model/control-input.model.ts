import { InputType } from '../control/input/input.type';
import { ControlEnum } from '../enum/control.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlInputModel extends ControlBaseModel {
  kind: ControlEnum.input;
  label: {
    value: string;
    isVisible: boolean;
  };
  input: {
    value: string;
    placeholder: string;
    type: InputType;
  };
}
