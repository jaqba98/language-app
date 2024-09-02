import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  Routes,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';

import { authRoutes } from './routes/auth.routes';
import { dashboardRoutes } from './routes/dashboard.routes';
import { errorRoutes } from './routes/error.routes';

const routes: Routes = [
  ...authRoutes,
  ...dashboardRoutes,
  ...errorRoutes,
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
