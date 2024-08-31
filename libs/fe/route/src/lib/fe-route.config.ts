import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';
import { feRoutes } from './routes.service';

export const feRouteConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      feRoutes,
      withHashLocation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
  ],
};
