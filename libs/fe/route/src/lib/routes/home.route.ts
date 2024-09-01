import { Routes } from '@angular/router';

import { HomeComponent } from '@english-learning/fe-page';

export const homeRoute: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
