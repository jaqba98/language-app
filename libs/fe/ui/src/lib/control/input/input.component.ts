import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BaseControlService } from '../../form/base-form/base-control.service';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [BaseControlService.getProvider(InputComponent)],
})
export class InputComponent extends BaseControlService<string> {
  @Input({ required: true }) formControl!: FormControl;

  isFocused = false;

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
