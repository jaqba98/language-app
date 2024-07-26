import { Route } from '@angular/router';

import {
  GrammarComponent,
  HomeComponent,
  RootComponent,
  PresentSimpleComponent,
} from '@english-learning/fe-page';

export const feRoutes: Route[] = [
  {
    path: '',
    component: RootComponent,
    children: [
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
    ],
  },
];
