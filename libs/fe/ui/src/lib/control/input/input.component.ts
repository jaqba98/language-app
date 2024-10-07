import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
    TextComponent,
    FlexComponent,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @ViewChild('self') self!: ElementRef;

  @Input({ required: true }) form!: FormControl;

  @Input({ required: true }) control!: ControlInputModel;

  onClick() {
    this.self.nativeElement.focus();
  }
}
