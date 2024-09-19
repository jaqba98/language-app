import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlButtonTextModel extends ControlBaseModel {
  kind: ControlKindEnum.buttonText;
  label: string;
  isSubmit: boolean;
}
