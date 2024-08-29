import { Component } from '@angular/core';

import { SectionComponent, RoutesMenuModel, SectionNavFormComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    SectionComponent,
    SectionNavFormComponent,
  ],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent {
  options: RoutesMenuModel[] = [
    {
      value: 'Present Simple',
      link: '/grammar/present-simple',
    },
    {
      value: 'Present Continuous',
      link: '/grammar/present-continuous',
    },
  ];
}
