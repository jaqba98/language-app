import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { TextComponent } from '../../misc/text/text.component';
import { TextColorType } from '../../misc/text/text.type';
import { ControlInputModel } from '../../model/control/control-input.model';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @ViewChild('self') self!: ElementRef;

  @Input({ required: true }) form!: FormControl;

  @Input({ required: true }) control!: ControlInputModel;

  textColor: TextColorType = 'text__tertiary';

  onFocus() {
    this.textColor = 'text__accent';
  }

  onBlur() {
    this.textColor = 'text__tertiary';
  }

  onClick() {
    this.self.nativeElement.focus();
  }
}
