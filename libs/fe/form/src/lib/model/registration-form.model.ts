import {
  ControlButtonTextModel,
  ControlInputModel,
} from '@english-learning/fe-component';

export interface RegistrationFormModel {
  email: ControlInputModel;
  name: ControlInputModel;
  password: ControlInputModel;
  repeatPassword: ControlInputModel;
  submit: ControlButtonTextModel;
}
