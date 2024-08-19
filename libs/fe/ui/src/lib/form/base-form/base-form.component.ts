import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ControlModel } from './base-form.model';
import { InputComponent } from '../../control/input/input.component';
import { FlexComponent } from '../../misc/flex/flex.component';

@Component({
  selector: 'lib-base-form',
  standalone: true,
  imports: [
    FlexComponent,
    InputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './base-form.component.html',
})
export class BaseFormComponent implements OnInit {
  @Input() controls: ControlModel[] = [];

  formGroup!: FormGroup;

  ngOnInit() {
    const formControls = this.controls
      .reduce((acc: Record<string, FormControl>, curr) => {
        acc[curr.name] = new FormControl('');
        return acc;
      }, {});
    this.formGroup = new FormGroup(formControls);
  }
}
