import { Routes } from '@angular/router';

import {
  AccountComponent,
  CourseComponent,
  CoursesComponent,
  DashboardComponent,
  GrammarComponent,
  VocabularyComponent,
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
      {
        path: 'course/:courseId',
        component: CourseComponent,
        children: [
          { path: 'grammar', component: GrammarComponent },
          { path: 'vocabulary', component: VocabularyComponent },
        ],
      },
    ],
  },
];
