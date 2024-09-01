import { Routes } from '@angular/router';

import { VocabularyComponent } from '@english-learning/fe-ui';

export const vocabularyRoute: Routes = [
  {
    path: 'vocabulary',
    component: VocabularyComponent,
  },
  {
    path: 'vocabulary:id',
    component: VocabularyComponent,
  },
];
