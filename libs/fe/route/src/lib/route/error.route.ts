import { Routes } from '@angular/router';

import { Http404Component } from '@english-learning/fe-page';

export const errorRoutes: Routes = [
  { path: '**', component: Http404Component },
];
