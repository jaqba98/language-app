import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { ControlInputModel } from '../../model/control/control-input.model';
import { ControlLinkModel } from '../../model/control/control-link.model';

export interface LoginFormModel {
  email: ControlInputModel;
  password: ControlInputModel;
  forgotPassword: ControlLinkModel;
  submit: ControlButtonTextModel;
  registration: ControlLinkModel;
}
