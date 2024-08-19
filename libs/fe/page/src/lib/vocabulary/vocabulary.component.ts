import { Component } from '@angular/core';

import {
  RoutesMenuModel,
  SectionComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-vocabulary',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './vocabulary.component.html',
})
export class VocabularyComponent {
  options: RoutesMenuModel[] = [
    { value: 'Test1', link: '/vocabulary/test1' },
  ];
}
