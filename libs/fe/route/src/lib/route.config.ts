import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  Routes,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';

import { homeRoute } from './routes/home.route';
import { vocabularyRoute } from './routes/vocabulary.route';
import { grammarRoute } from './routes/grammar.route';
import { errorRoute } from './routes/error.route';

const routes: Routes = [
  ...homeRoute,
  ...vocabularyRoute,
  ...grammarRoute,
  ...errorRoute,
];

export const routeConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
  ],
};
