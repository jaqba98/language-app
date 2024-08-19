import {
  Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { InputComponent } from '../../control/input/input.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { BaseFormModel, ControlKindEnum } from './base-form.model';

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
  @Input() baseForm!: BaseFormModel;

  @Output() event = new EventEmitter();

  formGroup!: FormGroup;

  ngOnInit() {
    const formControls = this.baseForm.controls
      .reduce((acc: Record<string, FormControl>, curr) => {
        if (acc[curr.name]) {
          throw new Error('The control name must be unique!');
        }
        switch (curr.kind) {
          case ControlKindEnum.input:
            acc[curr.name] = new FormControl(curr.defaultValue);
            break;
          case ControlKindEnum.buttonText:
            acc[curr.name] = new FormControl(curr.value);
            break;
          default:
            throw new Error('Unsupported control!');
        }
        return acc;
      }, {});
    this.formGroup = new FormGroup(formControls);
  }

  onSubmit() {
    this.event.emit(this.formGroup.value);
  }

  getControl(name: string) {
    return this.formGroup.get(name) as FormControl;
  }
}
