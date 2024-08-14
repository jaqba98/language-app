import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { routesVocabulary } from '../../service/routes-menu.service';
import { LinkComponent } from '../../control/link/link.component';
import { CardComponent } from '../../misc/card/card.component';
import { TextComponent } from '../../misc/text/text.component';
import { FlexComponent } from '../../misc/flex/flex.component';

@Component({
  selector: 'lib-vocabulary-nav',
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
  options = routesVocabulary;
}
