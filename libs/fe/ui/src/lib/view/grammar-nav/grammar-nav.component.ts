import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { routesGrammar } from '../../service/routes-menu.service';
import { LinkComponent } from '../../control/link/link.component';
import { CardComponent } from '../../misc/card/card.component';
import { TextComponent } from '../../misc/text/text.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { CardEnum } from '../../misc/card/card.enum';
import { TextEnum } from '../../misc/text/text.enum';

@Component({
  selector: 'lib-grammar-nav',
  standalone: true,
  imports: [
    CommonModule,
    LinkComponent,
    CardComponent,
    TextComponent,
    FlexComponent,
  ],
  templateUrl: './grammar-nav.component.html',
})
export class GrammarNavComponent {
  options = routesGrammar;

  header: TextEnum = TextEnum.header2;

  card: CardEnum = CardEnum.card__darken;
}
