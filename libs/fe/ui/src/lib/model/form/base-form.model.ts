import {
  ControlLinkModel,
  ControlButtonLinkModel,
  ControlButtonTextModel,
  ControlButtonIconModel,
  ControlInputModel,
  ControlTextModel,
} from '@english-learning/fe-component';
import {
  ChangePasswordFormModel,
  DashboardNavFormModel,
  ForgotPasswordFormModel,
  HamburgerFormModel,
  LoginFormModel,
  RegistrationFormModel,
} from '@english-learning/fe-form';

export type ControlType =
  | ControlInputModel
  | ControlButtonTextModel
  | ControlButtonIconModel
  | ControlButtonLinkModel
  | ControlLinkModel
  | ControlTextModel;

export type BaseFormControlsModel =
  | ChangePasswordFormModel
  | DashboardNavFormModel
  | ForgotPasswordFormModel
  | HamburgerFormModel
  | LoginFormModel
  | RegistrationFormModel;

export interface BaseFormModel<TForm> {
  controls: TForm;
}
