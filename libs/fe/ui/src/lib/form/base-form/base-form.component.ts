// Done
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Properties } from 'csstype';
import { CommonModule } from '@angular/common';

import { FlexComponent } from '../../layout/flex/flex.component';
import {
  BaseFormModel,
  ControlType,
} from '../../model/form/base-form.model';
import { InputComponent } from '../../control/input/input.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { LinkComponent } from '../../control/link/link.component';
import { ErrorComponent } from '../../misc/error/error.component';
import { ControlKindEnum } from '../../enum/control-kind.enum';

@Component({
  selector: 'lib-base-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexComponent,
    InputComponent,
    ButtonTextComponent,
    ButtonIconComponent,
    LinkComponent,
    ErrorComponent,
  ],
  templateUrl: './base-form.component.html',
})
export class BaseFormComponent implements OnInit {
  @Input({ required: true }) baseForm!: BaseFormModel;

  @Input() flexDirection: Properties['flexDirection'] = 'column';

  @Output() baseFormEvent = new EventEmitter();

  formGroup: FormGroup;

  formGroupInvalid = false;

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {
    this.baseForm.controls.forEach(control => {
      const { id } = control;
      if (this.formGroup.get(id)) {
        throw new Error(`Form control ${id} already exists!`);
      }
      this.formGroup.addControl(id, this.buildFormControl(control));
    });
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid && this.formGroup.touched) {
      this.formGroupInvalid = true;
      this.resetFormGroup();
      return;
    }
    this.baseFormEvent.emit(this.formGroup.value);
    this.resetFormGroup();
    this.formGroupInvalid = false;
  }

  getFormControl(name: string) {
    const formControl = this.formGroup.get(name);
    if (formControl) return formControl as FormControl;
    throw new Error(`Form control ${name} does not exists!`);
  }

  formControlInvalid(name: string) {
    return (
      this.getFormControl(name).invalid &&
      this.getFormControl(name).touched
    );
  }

  private buildFormControl(control: ControlType) {
    switch (control.kind) {
      case ControlKindEnum.input:
        return new FormControl(
          control.input.defaultValue,
          control.validation.validators,
        );
      case ControlKindEnum.buttonText:
      case ControlKindEnum.buttonIcon:
      case ControlKindEnum.link:
        return new FormControl(false, control.validation.validators);
      default:
        throw new Error('Unsupported control type!');
    }
  }

  private resetFormGroup() {
    this.baseForm.controls.forEach(control => {
      const { id } = control;
      this.formGroup.setControl(id, this.buildFormControl(control));
    });
    this.formGroup.markAsUntouched();
  }
}
