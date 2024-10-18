import { Component, Input, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComponentDirective } from '@english-learning/fe-system';
import { ControlInputModel } from '../../model/control-input.model';
import { FlexComponent } from '../../../layout/flex/flex.component';
import { TextComponent } from '../../../misc/text/text.component';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FlexComponent, TextComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent extends ComponentDirective {
  @Input({ required: true }) control!: ControlInputModel;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'input');
  }

  onClick() {
    this.self.nativeElement.focus();
  }
}
