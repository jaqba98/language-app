import { ChangePasswordFormModel } from './change-password-form.model';
import { DashboardNavFormModel } from './dashboard-nav-form.model';
import { ForgotPasswordFormModel } from './forgot-password-form.model';
import { HamburgerFormModel } from './hamburger-form.model';
import { LoginFormModel } from './login-form.model';
import { RegistrationFormModel } from './registration-form.model';

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
