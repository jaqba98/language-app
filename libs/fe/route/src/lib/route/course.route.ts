import { Routes } from '@angular/router';

import {
  QuizComponent,
  RoadmapComponent,
} from '@english-learning/fe-page';

export const courseRoutes: Routes = [
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'quiz', component: QuizComponent },
];
