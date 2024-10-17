import { ControlBaseModel, ControlEnum } from '@english-learning/fe-component';

export interface ControlButtonTextModel extends ControlBaseModel {
  kind: ControlEnum.buttonText;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: any;
  fullWidth: boolean;
}
