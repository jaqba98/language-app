import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  Routes,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';

import { authRoutes } from './route/auth.route';
import { dashboardRoutes } from './route/dashboard.route';
import { errorRoutes } from './route/error.route';

const routes: Routes = [...authRoutes, ...dashboardRoutes, ...errorRoutes];

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
