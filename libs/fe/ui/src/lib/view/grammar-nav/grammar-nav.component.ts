import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { routesGrammar } from '../../service/routes-menu.service';

@Component({
  selector: 'lib-grammar-nav',
  standalone: true,
  imports: [
    CommonModule,
    ButtonTextComponent
  ],
  templateUrl: './grammar-nav.component.html'
})
export class GrammarNavComponent {
  options = routesGrammar;
}
