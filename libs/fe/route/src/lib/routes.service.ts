import { Route } from '@angular/router';

import {
  GrammarComponent,
  HomeComponent,
  Test1BankComponent,
  Test1Component,
  Test1QuizComponent,
  VocabularyComponent,
} from '@english-learning/fe-page';

export const feRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'grammar',
    component: GrammarComponent,
  },
  {
    path: 'grammar/:tabId',
    component: GrammarComponent,
  },
  {
    path: 'vocabulary',
    component: VocabularyComponent,
    children: [
      {
        path: '',
        redirectTo: '/vocabulary/test1',
        pathMatch: 'full',
      },
      {
        path: 'test1',
        component: Test1Component,
        children: [
          {
            path: '',
            redirectTo: '/vocabulary/test1/bank',
            pathMatch: 'full',
          },
          {
            path: 'bank',
            component: Test1BankComponent,
          },
          {
            path: 'quiz',
            component: Test1QuizComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
