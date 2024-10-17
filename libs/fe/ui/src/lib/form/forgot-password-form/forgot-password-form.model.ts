import { ControlButtonTextModel } from '@english-learning/fe-component';
import { ControlInputModel } from '../../model/control/control-input.model';
import { ControlTextModel } from '../../model/control/control-text.model';

export interface ForgotPasswordFormModel {
  tip: ControlTextModel;
  email: ControlInputModel;
  submit: ControlButtonTextModel;
}
