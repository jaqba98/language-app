import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

import { TextComponent } from '../../misc/text/text.component';
import { ControlLinkModel } from '../../model/control/control-link.model';
import { FlexComponent } from '../../layout/flex/flex.component';

@Component({
  selector: 'lib-link',
  standalone: true,
  imports: [NgIf, FlexComponent, RouterLink, TextComponent],
  templateUrl: './link.component.html',
})
/**
 * Link Component
 */
export class LinkComponent {
  @Input({ required: true }) control!: ControlLinkModel;
}
