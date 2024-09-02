import { Routes } from '@angular/router';

import { RoadmapComponent } from '@english-learning/fe-page';
import { QuizComponent } from '@english-learning/fe-ui';

export const courseRoutes: Routes = [
  { path: 'roadmap', component: RoadmapComponent },
  { path: 'quiz', component: QuizComponent },
];
