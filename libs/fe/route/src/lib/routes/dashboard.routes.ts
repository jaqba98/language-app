import { Routes } from '@angular/router';

import {
  AccountComponent,
  CoursesComponent,
  DashboardComponent,
} from '@english-learning/fe-page';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/courses',
        pathMatch: 'full',
      },
      { path: 'courses', component: CoursesComponent },
      { path: 'account', component: AccountComponent },
    ],
  },
];