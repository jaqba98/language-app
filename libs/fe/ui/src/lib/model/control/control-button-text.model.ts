import {
  ControlBaseModel,
  ControlEnum,
  ButtonKindType,
} from '@english-learning/fe-component';

export interface ControlButtonTextModel extends ControlBaseModel {
  kind: ControlEnum.buttonText;
  label: string;
  type: ButtonKindType;
}
