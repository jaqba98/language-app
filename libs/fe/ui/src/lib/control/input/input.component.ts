import { Component, Input } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from '../../misc/text/text.component';
import { ControlInputModel } from '../../model/control/control-input.model';
import { ComponentDirective } from '../../base/component.directive';
import { FlexComponent } from '../../layout/flex/flex.component';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [
    ...ComponentDirective.buildImports(),
    ReactiveFormsModule,
    FlexComponent,
    TextComponent,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent extends ComponentDirective {
  @Input({ required: true }) control!: ControlInputModel;

  onClick() {
    this.self.nativeElement.focus();
  }
}
