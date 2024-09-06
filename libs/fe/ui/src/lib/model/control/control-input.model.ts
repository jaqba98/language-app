import { InputType } from '../../control/input/input.type';
import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlInputModel extends ControlBaseModel {
  kind: ControlKindEnum.input;
  label: {
    value: string;
    isVisible: boolean;
  };
  input: {
    defaultValue: string;
    placeholder: string;
    type: InputType;
  };
}
