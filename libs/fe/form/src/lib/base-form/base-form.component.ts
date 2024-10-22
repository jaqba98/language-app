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
  FlexDirectionType,
  ControlType,
  ControlEnum,
} from '@english-learning/fe-component';
import {
  elementByIdExistError,
  elementByIdNotExistError,
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
  ],
  templateUrl: './base-form.component.html',
})
export class BaseFormComponent<
  TForm extends object = BaseFormControlsModel,
> extends EventEmitterDirective<FormGroup['value']> {
  @Input({ required: true }) baseForm!: BaseFormModel<TForm>;

  @Input() flexDirection: FlexDirectionType = 'column';

  formGroup: FormGroup;

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
    this.emit(this.formGroup.value);
  }

  getControls() {
    return Object.values(this.baseForm.controls).map(control => control as ControlType);
  }

  getControl(id: string) {
    const control = this.formGroup.get(id);
    if (control) return control as FormControl;
    throw new Error(elementByIdNotExistError('Form control', id));
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
