/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlBaseModel, ControlEnum } from '@english-learning/fe-component';

export interface ControlButtonIconModel extends ControlBaseModel {
  kind: ControlEnum.buttonIcon;
  icon: any;
  color: any;
  type: any;
  fullWidth: boolean;
}
