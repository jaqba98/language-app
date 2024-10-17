import { ValidatorFn } from '@angular/forms';

export interface ControlValidationModel {
  validation: {
    validators: ValidatorFn[];
    isVisible: boolean;
  };
}
