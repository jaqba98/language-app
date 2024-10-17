import { ControlBaseModel, ControlEnum } from '@english-learning/fe-component';

export interface ControlInputModel extends ControlBaseModel {
  kind: ControlEnum.input;
  label: {
    value: string;
    isVisible: boolean;
  };
  input: {
    value: string;
    placeholder: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: any;
  };
}
