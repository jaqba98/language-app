import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { ControlInputModel } from '../../model/control/control-input.model';
import { ControlTextModel } from '../../model/control/control-text.model';

export interface ForgotPasswordFormModel {
  tip: ControlTextModel;
  email: ControlInputModel;
  submit: ControlButtonTextModel;
}
