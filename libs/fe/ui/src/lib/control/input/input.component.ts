import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { ComponentDirective } from '../../base/component.directive';
import { ControlInputModel } from '../../model/control/control-input.model';
import { FlexComponent } from '../../layout/flex/flex.component';
import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FlexComponent, TextComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
/**
 * Input Component
 */
export class InputComponent extends ComponentDirective {
  @Input({ required: true }) control!: ControlInputModel;

  onClick() {
    this.self.nativeElement.focus();
  }
}
