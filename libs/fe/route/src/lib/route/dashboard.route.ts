import { Routes } from '@angular/router';

import {
  DashboardComponent,
  CoursesComponent,
  AccountComponent,
  CourseComponent,
  StatisticsComponent,
  LogoutComponent,
} from '@english-learning/fe-page';
import { courseRoutes } from './course.route';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'statistics',
        pathMatch: 'full',
      },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'account', component: AccountComponent },
      {
        path: 'course/:courseId',
        component: CourseComponent,
        children: courseRoutes,
      },
      { path: 'logout', component: LogoutComponent },
    ],
  },
];
