import { Component } from '@angular/core';

import { SectionComponent, SectionNavFormComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    SectionComponent,
    SectionNavFormComponent,
  ],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent {}
