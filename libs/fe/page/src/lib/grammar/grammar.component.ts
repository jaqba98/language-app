import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrammarNavComponent } from "@english-learning/fe-ui";

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    CommonModule,
    GrammarNavComponent
  ],
  templateUrl: './grammar.component.html'
})
export class GrammarComponent {}
