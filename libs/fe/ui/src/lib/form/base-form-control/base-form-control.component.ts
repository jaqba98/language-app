import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseFormModel } from '../base-form/base-form.model';
import { InputComponent } from '../../control/input/input.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { LinkComponent } from '../../control/link/link.component';

@Component({
  selector: 'lib-base-form-control',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonTextComponent,
    ButtonIconComponent,
    LinkComponent,
  ],
  templateUrl: './base-form-control.component.html',
})
export class BaseFormControlComponent {
  @Input({ required: true }) controls!: BaseFormModel['controls'];

  @Output() clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit();
  }
}
