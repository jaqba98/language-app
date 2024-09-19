import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';

import { TextComponent } from '../../misc/text/text.component';
import { ControlLinkModel } from '../../model/control/control-link.model';
import { FlexComponent } from '../../layout/flex/flex.component';

@Component({
  selector: 'lib-link',
  standalone: true,
  imports: [NgIf, TextComponent, RouterLink, FlexComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input({ required: true }) form!: FormControl;

  @Input({ required: true }) control!: ControlLinkModel;
}
