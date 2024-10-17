import { ControlBaseModel, ControlEnum } from '@english-learning/fe-component';

export interface ControlButtonLinkModel extends ControlBaseModel {
  kind: ControlEnum.buttonLink;
  label: string;
  path: string;
  fullWidth: boolean;
}
