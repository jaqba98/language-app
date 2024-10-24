import { CommonModule } from '@angular/common';
import { Component, Input, Injector } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';

import {
  FlexComponent,
  InputComponent,
  ButtonLinkComponent,
  ButtonTextComponent,
  ButtonIconComponent,
  LinkComponent,
  ErrorComponent,
  SuccessComponent,
  FlexDirectionType,
  ControlType,
  ControlEnum,
} from '@english-learning/fe-component';
import {
  elementByIdExistError,
  elementByIdNotExistError,
  fieldIsRequiredError,
  notCorrectEmailError,
  invalidInputError,
  unsupportedTypeError,
} from '@english-learning/fe-domain';
import { EventEmitterDirective } from '@english-learning/fe-system';
import { BaseFormControlsModel, BaseFormModel } from '../model/base-form.model';

@Component({
  selector: 'lib-base-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexComponent,
    InputComponent,
    ButtonLinkComponent,
    ButtonTextComponent,
    ButtonIconComponent,
    LinkComponent,
    ErrorComponent,
    SuccessComponent,
  ],
  templateUrl: './base-form.component.html',
})
export class BaseFormComponent<
  TForm extends object = BaseFormControlsModel,
> extends EventEmitterDirective<FormGroup['value']> {
  // I am here
  @Input({ required: true }) baseForm!: BaseFormModel<TForm>;

  @Input() flexDirection: FlexDirectionType = 'column';

  @Input() formErrorMessage = 'The form was not completed correctly!';

  @Input() formSuccessMessage = 'The form was completed correctly.';

  @Input() formValidation = true;

  @Input() resetIfError = true;

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
    this.getControls().forEach(control => {
      const { id } = control;
      if (this.controlExist(id)) {
        throw new Error(elementByIdExistError('Control', id));
      }
      this.formGroup.addControl(id, this.buildControl(control));
    });
  }

  onSubmit() {
    this.formGroupValid = false;
    this.formGroupInvalid = false;
    this.formGroup.markAllAsTouched();
    const { valid, invalid, touched } = this.formGroup;
    if (invalid && touched) {
      this.formGroupInvalid = true;
      if (this.resetIfError) this.resetControls();
      return;
    }
    if (valid && touched) {
      this.formGroupValid = true;
      if (this.resetIfError) this.resetControls();
      return;
    }
    this.emit(this.formGroup.value);
    if (this.resetIfError) this.resetControls();
    this.formGroupValid = false;
    this.formGroupInvalid = false;
  }

  getControls() {
    return Object.values(this.baseForm.controls).map(control => control as ControlType);
  }

  getControl(id: string) {
    const control = this.formGroup.get(id);
    if (control) return control as FormControl;
    throw new Error(elementByIdNotExistError('Form control', id));
  }

  getControlError(id: string) {
    const control = this.getControl(id);
    if (control.errors && control.errors['required']) {
      return fieldIsRequiredError();
    }
    if (control.errors && control.errors['email']) {
      return notCorrectEmailError();
    }
    return invalidInputError();
  }

  controlInvalid(control: ControlType) {
    if (!control.validation.isVisible) return false;
    const formControl = this.getControl(control.id);
    return formControl.invalid && formControl.touched;
  }

  formValid() {
    return this.formValidation && this.formGroupValid;
  }

  formInvalid() {
    return this.formValidation && this.formGroupInvalid;
  }

  private resetControls() {
    this.getControls().forEach(control => {
      this.formGroup.setControl(control.id, this.buildControl(control));
    });
    this.formGroup.markAsUntouched();
  }

  private controlExist(id: string) {
    return !!this.formGroup.get(id);
  }

  private buildControl(control: ControlType) {
    switch (control.kind) {
      case ControlEnum.input:
        return new FormControl(control.input.value, control.validation.validators);
      case ControlEnum.buttonLink:
      case ControlEnum.buttonText:
      case ControlEnum.buttonIcon:
      case ControlEnum.link:
        return new FormControl(false, control.validation.validators);
      default:
        throw new Error(unsupportedTypeError('form control', control.kind));
    }
  }
}
