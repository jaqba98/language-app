import { Properties } from 'csstype';

import { ControlKindEnum } from '../../enum/control-kind.enum';
import { ControlBaseModel } from './control-base.model';

export interface ControlTextModel extends ControlBaseModel {
  kind: ControlKindEnum.text;
  value: string;
  margin: Properties['margin'];
}
