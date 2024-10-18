import {
  ControlButtonTextModel,
  ControlInputModel,
  ControlLinkModel,
} from '@english-learning/fe-component';

export interface LoginFormModel {
  email: ControlInputModel;
  password: ControlInputModel;
  forgotPassword: ControlLinkModel;
  submit: ControlButtonTextModel;
  registration: ControlLinkModel;
}
