import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { ControlInputModel } from '../../model/control/control-input.model';

export interface RegistrationFormModel {
  email: ControlInputModel;
  name: ControlInputModel;
  password: ControlInputModel;
  repeatPassword: ControlInputModel;
  submit: ControlButtonTextModel;
}
