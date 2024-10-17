import { Component, Injector, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { ComponentDirective } from '@english-learning/fe-system';
import { TextComponent } from '@english-learning/fe-component';
import { ControlInputModel } from '../../model/control/control-input.model';
import { FlexComponent } from '../../layout/flex/flex.component';

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

  constructor(protected override readonly injector: Injector) {
    super(injector, 'input');
  }

  onClick() {
    this.self.nativeElement.focus();
  }
}
