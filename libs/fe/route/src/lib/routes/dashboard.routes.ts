import { Routes } from '@angular/router';

import { DashboardComponent } from '@english-learning/fe-page';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [],
  },
  // {
  //   children: [
  //     {
  //       path: 'courses',
  //       // TODO: Set component for courses route
  //     },
  //     {
  //       path: 'account',
  //       // TODO: Set component for account route
  //     },
  //     {
  //       path: 'course',
  //       // TODO: Set component for course route
  //     },
  //   ],
  // },
];
