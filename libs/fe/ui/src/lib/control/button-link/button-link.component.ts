import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { TextComponent } from '../../misc/text/text.component';
import { ButtonComponent } from '../button/button.component';
import { ControlButtonLinkModel } from '../../model/control/control-button-link.model';

@Component({
  selector: 'lib-button-link',
  standalone: true,
  imports: [RouterLink, ButtonComponent, TextComponent],
  templateUrl: './button-link.component.html',
})
export class ButtonLinkComponent {
  @Input({ required: true }) form!: FormControl;

  @Input({ required: true }) control!: ControlButtonLinkModel;

  @Output() clickEvent = new EventEmitter();

  onClickEvent() {
    this.clickEvent.emit();
  }
}
