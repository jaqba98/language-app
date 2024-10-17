import { Component, Injector, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentDirective } from '@english-learning/fe-system';
import { TextComponent } from '../../misc/text/text.component';
import { ControlLinkModel } from '../model/control-link.model';

@Component({
  selector: 'lib-link',
  standalone: true,
  imports: [RouterLink, CommonModule, TextComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent extends ComponentDirective {
  @Input({ required: true }) control!: ControlLinkModel;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'link');
  }
}
