import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { RoutesMenuModel } from '@english-learning/fe-route';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';

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
  @Input({ required: true }) options!: RoutesMenuModel[];
}
