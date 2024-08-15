import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { LinkComponent } from '../../control/link/link.component';
import { CardComponent } from '../../misc/card/card.component';
import { TextComponent } from '../../misc/text/text.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { RoutesMenuModel } from '../../model/routes-menu.model';

@Component({
  selector: 'lib-sub-nav',
  standalone: true,
  imports: [
    CommonModule,
    LinkComponent,
    CardComponent,
    TextComponent,
    FlexComponent,
  ],
  templateUrl: './sub-nav.component.html',
})
export class SubNavComponent {
  @Input({ required: true }) header!: string;

  @Input({ required: true }) options!: RoutesMenuModel[];
}
