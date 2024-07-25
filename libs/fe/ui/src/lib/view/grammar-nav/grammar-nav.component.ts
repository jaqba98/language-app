import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { routesGrammar } from '../../service/routes-menu.service';
import { LinkComponent } from '../../control/link/link.component';
import { CardComponent } from '../../misc/card/card.component';
import { TextComponent } from '../../misc/text/text.component';
import { FlexComponent } from '../../misc/flex/flex.component';

@Component({
  selector: 'lib-grammar-nav',
  standalone: true,
  imports: [
    CommonModule,
    LinkComponent,
    CardComponent,
    TextComponent,
    FlexComponent
  ],
  templateUrl: './grammar-nav.component.html'
})
export class GrammarNavComponent {
  options = routesGrammar;
}
