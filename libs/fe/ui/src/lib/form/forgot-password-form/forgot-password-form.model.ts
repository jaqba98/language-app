import {
  ControlButtonTextModel,
  ControlInputModel,
} from '@english-learning/fe-component';
import { ControlTextModel } from '../../model/control/control-text.model';

export interface ForgotPasswordFormModel {
  tip: ControlTextModel;
  email: ControlInputModel;
  submit: ControlButtonTextModel;
}
