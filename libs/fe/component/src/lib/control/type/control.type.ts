import { ControlButtonIconModel } from '../model/control-button-icon.model';
import { ControlButtonLinkModel } from '../model/control-button-link.model';
import { ControlButtonTextModel } from '../model/control-button-text.model';
import { ControlInputModel } from '../model/control-input.model';
import { ControlLinkModel } from '../model/control-link.model';
import { ControlTextModel } from '../model/control-text.model';

export type ControlType =
  | ControlInputModel
  | ControlButtonTextModel
  | ControlButtonIconModel
  | ControlButtonLinkModel
  | ControlLinkModel
  | ControlTextModel;
