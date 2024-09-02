import { Routes } from '@angular/router';

import {
  CoursesComponent,
  DashboardComponent,
} from '@english-learning/fe-page';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'courses',
        component: CoursesComponent,
      },
    ],
  },
  // {
  //   children: [
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
