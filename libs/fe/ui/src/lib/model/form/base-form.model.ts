import { ChangePasswordFormModel } from '../../form/change-password-form/change-password-form.model';
import { DashboardNavFormModel } from '../../form/dashboard-nav-form/dashboard-nav-form.model';
import { ForgotPasswordFormModel } from '../../form/forgot-password-form/forgot-password-form.model';
import { HamburgerFormModel } from '../../form/hamburger-form/hamburger-form.model';
import { LoginFormModel } from '../../form/login-form/login-form.model';
import { RegistrationFormModel } from '../../form/registration-form/registration-form.model';
import { ControlButtonIconModel } from '../control/control-button-icon.model';
import { ControlButtonLinkModel } from '../control/control-button-link.model';
import { ControlButtonTextModel } from '../control/control-button-text.model';
import { ControlInputModel } from '../control/control-input.model';
import { ControlLinkModel } from '../control/control-link.model';
import { ControlTextModel } from '../control/control-text.model';

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
