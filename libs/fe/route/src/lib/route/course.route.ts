import { Routes } from '@angular/router';

import { TasksComponent } from '@english-learning/fe-page';

export const courseRoutes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  { path: 'tasks', component: TasksComponent },
];
