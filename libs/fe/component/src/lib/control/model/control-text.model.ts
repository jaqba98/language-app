import { Properties } from 'csstype';

import { ControlEnum } from '../enum/control.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlTextModel extends ControlBaseModel {
  kind: ControlEnum.text;
  value: string;
  margin: Properties['margin'];
}
