import { ControlBaseModel, ControlEnum } from '@english-learning/fe-component';
import { Properties } from 'csstype';

export interface ControlTextModel extends ControlBaseModel {
  kind: ControlEnum.text;
  value: string;
  margin: Properties['margin'];
}
