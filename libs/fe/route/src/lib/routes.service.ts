import { Route } from '@angular/router';

import {
  GrammarComponent,
  HomeComponent,
  PresentContinuousComponent,
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
        path: '',
        redirectTo: '/grammar/present-simple',
        pathMatch: 'full',
      },
      {
        path: 'present-simple',
        component: PresentSimpleComponent,
      },
      {
        path: 'present-continuous',
        component: PresentContinuousComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
