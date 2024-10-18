import {
  ControlButtonTextModel,
  ControlInputModel,
  ControlTextModel,
} from '@english-learning/fe-component';

export interface ForgotPasswordFormModel {
  tip: ControlTextModel;
  email: ControlInputModel;
  submit: ControlButtonTextModel;
}
