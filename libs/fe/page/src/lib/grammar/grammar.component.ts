import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GrammarNavComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    RouterOutlet,
    GrammarNavComponent,
  ],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent {}
