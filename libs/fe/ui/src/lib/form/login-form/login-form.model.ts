import { ControlButtonLinkModel } from '../../model/control/control-button-link.model';
import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { ControlInputModel } from '../../model/control/control-input.model';

export interface LoginFormModel {
  email: ControlInputModel;
  password: ControlInputModel;
  forgotPassword: ControlButtonLinkModel;
  submit: ControlButtonTextModel;
  registration: ControlButtonLinkModel;
}
