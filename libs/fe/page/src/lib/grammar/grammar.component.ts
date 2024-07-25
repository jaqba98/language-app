import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CardComponent, GrammarNavComponent } from "@english-learning/fe-ui";

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    CommonModule,
    GrammarNavComponent,
    RouterOutlet,
    CardComponent
  ],
  templateUrl: './grammar.component.html'
})
export class GrammarComponent {}
