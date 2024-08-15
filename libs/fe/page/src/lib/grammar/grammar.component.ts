import { Component } from '@angular/core';

import {
  routesGrammar,
  SectionComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent {
  options = routesGrammar;
}
