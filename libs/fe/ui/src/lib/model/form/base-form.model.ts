import { ControlButtonIconModel } from '../control/control-button-icon.model';
import { ControlButtonTextModel } from '../control/control-button-text.model';
import { ControlInputModel } from '../control/control-input.model';
import { ControlLinkModel } from '../control/control-link.model';

export type ControlType =
  | ControlInputModel
  | ControlButtonTextModel
  | ControlButtonIconModel
  | ControlLinkModel;

export interface BaseFormModel {
  controls: ControlType[];
}
