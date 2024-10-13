import { ControlButtonTextModel } from '../../model/control/control-button-text.model';
import { ControlInputModel } from '../../model/control/control-input.model';

export interface ChangePasswordFormModel {
  password: ControlInputModel;
  repeatPassword: ControlInputModel;
  submit: ControlButtonTextModel;
}
