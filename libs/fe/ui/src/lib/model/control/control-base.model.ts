import { PositionType } from '@english-learning/shared-type';
import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlValidationModel } from './control-validation.model';

export interface ControlBaseModel extends ControlValidationModel {
  kind: ControlKindEnum;
  id: string;
  alignItems: PositionType;
}
