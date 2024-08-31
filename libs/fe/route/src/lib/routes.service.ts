import { Route } from '@angular/router';

import {
  Error404Component,
  GrammarComponent,
  HomeComponent,
  VocabularyComponent,
} from '@english-learning/fe-page';

// TODO: Specify all requires routes
export const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vocabulary/:id?', component: VocabularyComponent },
  { path: 'grammar/:id?', component: GrammarComponent },
  { path: '**', component: Error404Component },
];
