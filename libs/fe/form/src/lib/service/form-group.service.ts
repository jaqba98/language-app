import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class FormGroupService {
  private formGroup: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  getFormGroup() {
    return this.formGroup;
  }
}
