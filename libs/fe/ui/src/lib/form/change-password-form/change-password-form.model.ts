import {
  ControlButtonTextModel,
  ControlInputModel,
} from '@english-learning/fe-component';

export interface ChangePasswordFormModel {
  password: ControlInputModel;
  repeatPassword: ControlInputModel;
  submit: ControlButtonTextModel;
}
