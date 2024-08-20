import {
  Component, OnInit, Input, Output, EventEmitter,
} from '@angular/core';
import {
  ReactiveFormsModule, FormGroup, FormControl, FormBuilder,
} from '@angular/forms';

import { BaseFormModel, ControlKindEnum, ControlType } from './base-form.model';
import { FlexComponent } from '../../misc/flex/flex.component';
import { InputComponent } from '../../control/input/input.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';

@Component({
  selector: 'lib-base-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FlexComponent,
    InputComponent,
    ButtonTextComponent,
  ],
  templateUrl: './base-form.component.html',
})
export class BaseFormComponent implements OnInit {
  @Input({ required: true }) baseForm!: BaseFormModel;

  @Output() baseFormEvent = new EventEmitter();

  formGroup: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit() {
    this.baseForm.controls.forEach((control) => {
      const { name } = control;
      this.checkFormControlExist(name);
      this.formGroup.addControl(name, this.buildFormControl(control));
    });
  }

  onSubmit() {
    this.baseFormEvent.emit(this.formGroup.value);
  }

  getFormControl(name: string) {
    const formControl = this.formGroup.get(name);
    if (formControl) return formControl as FormControl;
    throw new Error(`Form control ${name} does not exists!`);
  }

  private checkFormControlExist(name: string) {
    if (this.formGroup.get(name)) {
      throw new Error(`Form control ${name} already exists!`);
    }
  }

  private buildFormControl(control: ControlType) {
    switch (control.kind) {
      case ControlKindEnum.input:
        return new FormControl(control.defaultValue);
      case ControlKindEnum.buttonText:
        return new FormControl(control.label);
      default:
        throw new Error('Unsupported control type!');
    }
  }
}
