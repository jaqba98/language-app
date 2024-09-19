import { Properties } from 'csstype';

import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlValidationModel } from './control-validation.model';

export interface ControlBaseModel extends ControlValidationModel {
  kind: ControlKindEnum;
  id: string;
  alignItems: Properties['alignItems'];
}
