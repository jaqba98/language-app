import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { BaseControlService } from '../../form/base-form/base-control.service';

@Component({
  selector: 'lib-button-text',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './button-text.component.html',
  styleUrl: './button-text.component.scss',
  providers: [BaseControlService.getProvider(ButtonTextComponent)],
})
export class ButtonTextComponent extends BaseControlService<string> {
  @Input({ required: true }) formControl!: FormControl;

  @Input({ required: true }) label!: string;
}
