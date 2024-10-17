import { Component, Input, Injector } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import {
  ButtonLinkComponent,
  ControlEnum,
  LinkComponent,
} from '@english-learning/fe-component';
import {
  elementByIdExistError,
  elementByIdNotExistError,
  fieldIsRequiredError,
  invalidInputError,
  notCorrectEmailError,
  unsupportedTypeError,
} from '@english-learning/fe-domain';
import { DirectionType } from '@english-learning/shared-type';
import { EventEmitterDirective } from '@english-learning/fe-system';
import {
  BaseFormControlsModel,
  BaseFormModel,
  ControlType,
} from '../../model/form/base-form.model';
import { FlexComponent } from '../../layout/flex/flex.component';
import { InputComponent } from '../../control/input/input.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { ErrorComponent } from '../../misc/error/error.component';

@Component({
  selector: 'lib-base-form',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    ReactiveFormsModule,
    FlexComponent,
    InputComponent,
    ButtonLinkComponent,
    ButtonTextComponent,
    ButtonIconComponent,
    ErrorComponent,
    LinkComponent,
  ],
  templateUrl: './base-form.component.html',
})
export class BaseFormComponent extends EventEmitterDirective<FormGroup['value']> {
  @Input({ required: true }) baseForm!: BaseFormModel<BaseFormControlsModel>;

  @Input() flexDirection: DirectionType = 'column';

  @Input() resetIfError = false;

  @Input() formValidation = true;

  @Input() formErrorMessage = 'The form was not completed correctly.';

  @Input() formSuccessMessage = 'The form was completed correctly.';

  formGroup: FormGroup;

  formGroupInvalid = false;

  formGroupValid = false;

  constructor(
    protected override readonly injector: Injector,
    private readonly fb: FormBuilder,
  ) {
    super(injector, 'base-form');
    this.formGroup = this.fb.group({});
  }

  protected override afterInit() {
    Object.values(this.baseForm.controls).forEach(control => {
      const { id } = control;
      if (this.formGroup.get(id)) {
        throw new Error(elementByIdExistError('Form control', id));
      }
      this.formGroup.addControl(id, this.buildFormControl(control));
    });
  }

  onSubmit() {
    this.resetFormGroup();
    const { invalid, touched } = this.formGroup;
    if (invalid && touched) {
      this.formGroupInvalid = true;
      if (this.resetIfError) this.resetFormControls();
      return;
    }
    this.formGroupValid = true;
    this.emit(this.formGroup.value);
    this.resetFormControls();
  }

  getFormControl(id: string) {
    const formControl = this.formGroup.get(id);
    if (formControl) return formControl as FormControl;
    throw new Error(elementByIdNotExistError('Form control', id));
  }

  getControls() {
    return Object.values(this.baseForm.controls);
  }

  formControlInvalid(id: string) {
    const formControl = this.getFormControl(id);
    return formControl.invalid && formControl.touched;
  }

  getFormControlError(id: string) {
    const formControl = this.getFormControl(id);
    if (formControl.errors && formControl.errors['required']) {
      return fieldIsRequiredError();
    }
    if (formControl.errors && formControl.errors['email']) {
      return notCorrectEmailError();
    }
    return invalidInputError();
  }

  private buildFormControl(control: ControlType) {
    switch (control.kind) {
      case ControlEnum.input:
        return new FormControl(control.input.value, control.validation.validators);
      case ControlEnum.buttonText:
      case ControlEnum.buttonLink:
      case ControlEnum.buttonIcon:
      case ControlEnum.link:
        return new FormControl(false, control.validation.validators);
      default:
        throw new Error(unsupportedTypeError('form control', control.kind));
    }
  }

  private resetFormGroup() {
    this.formGroupInvalid = false;
    this.formGroupValid = false;
    this.formGroup.markAllAsTouched();
  }

  private resetFormControls() {
    Object.values(this.baseForm.controls).forEach(control => {
      this.formGroup.setControl(control.id, this.buildFormControl(control));
    });
    this.formGroup.markAsUntouched();
  }
}

// export class BaseFormComponent implements OnInit {
//   @Input({ required: true }) baseForm!: BaseFormModel;
//   @Input() flexDirection: Properties['flexDirection'] = 'column';
//   @Input() resetIfError = false;
//   @Input() formValidation = true;
//   @Output() baseFormEvent = new EventEmitter();
//   formGroup: FormGroup;
//   formGroupInvalid = false;
//   formGroupValid = false;
//   onSubmit() {
//     this.formGroupInvalid = false;
//     this.formGroupValid = false;
//     this.formGroup.markAllAsTouched();
//     const { invalid, touched } = this.formGroup;
//     if (invalid && touched) {
//       this.formGroupInvalid = true;
//       if (this.resetIfError) {
//         this.resetFormGroup();
//       }
//       return;
//     }
//     this.formGroupValid = true;
//     this.baseFormEvent.emit(this.formGroup.value);
//     this.resetFormGroup();
//     this.formGroupInvalid = false;
//   }
//   getFormControl(id: string) {
//     const formControl = this.formGroup.get(id);
//     if (formControl) return formControl as FormControl;
//     throw new Error(`Form control: ${id} does not exists!`);
//   }
//   getFormControlError(id: string) {
//     const formControl = this.getFormControl(id);
//     if (formControl.errors && formControl.errors['required']) {
//       return 'This field is required.';
//     }
//     if (formControl.errors && formControl.errors['email']) {
//       return 'Please enter a valid email address.';
//     }
//     return 'Invalid input.';
//   }
//   private formControlNotExist(id: string) {
//     if (this.formGroup.get(id)) {
//       throw new Error(`Form control: ${id} already exists!`);
//     }
//   }
//   private buildFormControl(control: ControlType) {
//     switch (control.kind) {
//       case ControlKindEnum.input:
//         return new FormControl(control.input.defaultValue, control.validation.validators);
//       case ControlKindEnum.buttonText:
//       case ControlKindEnum.buttonIcon:
//       case ControlKindEnum.buttonLink:
//       case ControlKindEnum.link:
//         return new FormControl(false, control.validation.validators);
//       case ControlKindEnum.text:
//         return new FormControl('', control.validation.validators);
//       default:
//         throw new Error('Unsupported control type!');
//     }
//   }
//   private resetFormGroup() {
//     this.baseForm.controls.forEach(control => {
//       const { id } = control;
//       this.formGroup.setControl(id, this.buildFormControl(control));
//     });
//     this.formGroup.markAsUntouched();
//   }
// }
