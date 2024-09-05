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

import { FlexComponent } from '../../layout/flex/flex.component';
import { BaseFormControlComponent } from '../base-form-control/base-form-control.component';
import {
  BaseFormModel,
  ControlType,
  ControlKindEnum,
} from './base-form.model';

@Component({
  selector: 'lib-base-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FlexComponent,
    BaseFormControlComponent,
  ],
  templateUrl: './base-form.component.html',
})
export class BaseFormComponent implements OnInit {
  @Input({ required: true }) baseForm!: BaseFormModel;

  @Input() flexDirection: Properties['flexDirection'] = 'column';

  @Output() baseFormEvent = new EventEmitter();

  formGroup: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {
    this.baseForm.controls.forEach(control => {
      const { name } = control;
      if (this.formGroup.get(name)) {
        throw new Error(`Form control ${name} already exists!`);
      }
      this.formGroup.addControl(name, this.buildFormControl(control));
    });
  }

  onSubmit() {
    this.baseFormEvent.emit(this.formGroup.value);
    this.resetFormGroup();
  }

  getFormControl(name: string) {
    const formControl = this.formGroup.get(name);
    if (formControl) return formControl as FormControl;
    throw new Error(`Form control ${name} does not exists!`);
  }

  private buildFormControl(control: ControlType) {
    switch (control.kind) {
      case ControlKindEnum.input:
        return new FormControl(
          control.defaultValue,
          control.validators,
        );
      case ControlKindEnum.buttonText:
      case ControlKindEnum.buttonIcon:
      case ControlKindEnum.link:
        return new FormControl(false, control.validators);
      default:
        throw new Error('Unsupported control type!');
    }
  }

  private resetFormGroup() {
    this.baseForm.controls.forEach(control => {
      const { name } = control;
      this.formGroup.setControl(name, this.buildFormControl(control));
    });
  }
}
