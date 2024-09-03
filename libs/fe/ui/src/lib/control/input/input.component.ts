// Done
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { BaseControlService } from '../../form/base-form/base-control.service';
import { TextComponent } from '../../misc/text/text.component';
import { TextColorType } from '../../misc/text/text.type';
import { InputType } from './input.type';

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

  @Input() label = '';

  @Input() placeholder = '';

  @Input() type: InputType = 'text';

  textColor: TextColorType = 'text__secondary';

  onFocus() {
    this.textColor = 'text__accent';
  }

  onBlur() {
    this.textColor = 'text__secondary';
  }
}
