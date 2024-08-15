import { Component } from '@angular/core';

import { CardComponent, routesVocabularyTest1, SectionComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-test1',
  standalone: true,
  imports: [
    SectionComponent,
    CardComponent,
  ],
  templateUrl: './test1.component.html',
})
export class Test1Component {
  options = routesVocabularyTest1;
}
