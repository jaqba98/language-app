import { FlexAlignitemsType } from '../../layout/flex/flex.type';
import { ControlEnum } from '../enum/control.enum';
import { ControlValidationModel } from './control-validation.model';

export interface ControlBaseModel extends ControlValidationModel {
  kind: ControlEnum;
  id: string;
  alignItems: FlexAlignitemsType;
}
