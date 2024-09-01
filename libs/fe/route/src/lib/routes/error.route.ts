import { Routes } from '@angular/router';

import { Error404Component } from '@english-learning/fe-page';

export const errorRoute: Routes = [
  {
    path: '**',
    component: Error404Component,
  },
];
