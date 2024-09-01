import { Routes } from '@angular/router';

import { GrammarComponent } from '@english-learning/fe-page';

export const grammarRoute: Routes = [
  {
    path: 'grammar',
    component: GrammarComponent,
  },
  {
    path: 'grammar:id',
    component: GrammarComponent,
  },
];
