import { Routes } from '@angular/router';

import {
  DashboardComponent,
  CoursesComponent,
  AccountComponent,
  CourseComponent,
  GrammarComponent,
  StatisticsComponent,
  WritingComponent,
  ReadingComponent,
  RoadmapComponent,
} from '@english-learning/fe-page';
import { VocabularyComponent } from '@english-learning/fe-ui';

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
      { path: 'statistics', component: StatisticsComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'account', component: AccountComponent },
      {
        path: 'course/:courseId',
        component: CourseComponent,
        children: [
          { path: 'roadmap', component: RoadmapComponent },
          { path: 'writing', component: WritingComponent },
          { path: 'reading', component: ReadingComponent },
          { path: 'vocabulary', component: VocabularyComponent },
          { path: 'grammar', component: GrammarComponent },
        ],
      },
    ],
  },
];
