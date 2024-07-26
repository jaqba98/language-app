import { Route } from '@angular/router';

import {
  GrammarComponent,
  HomeComponent,
  PresentSimpleComponent,
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
    children: [
      {
        path: 'present-simple',
        component: PresentSimpleComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
