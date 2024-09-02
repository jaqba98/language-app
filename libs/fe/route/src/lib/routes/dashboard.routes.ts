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
      { path: 'courses', component: CoursesComponent },
      { path: 'account', component: AccountComponent },
    ],
  },
  // {
  //   children: [
  //     {
  //       path: 'course',
  //       // TODO: Set component for course route
  //     },
  //   ],
  // },
];
