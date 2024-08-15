import { Component } from '@angular/core';

import {
  routesVocabulary,
  SectionComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-vocabulary',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './vocabulary.component.html',
})
export class VocabularyComponent {
  options = routesVocabulary;
}
