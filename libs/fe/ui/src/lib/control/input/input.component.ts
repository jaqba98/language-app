import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { BaseControlService } from '../../form/base-form/base-control.service';
import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [ReactiveFormsModule, TextComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [BaseControlService.getProvider(InputComponent)],
})
export class InputComponent extends BaseControlService<string> {
  @Input({ required: true }) formControl!: FormControl;

  @Input() placeholder = '';
}
