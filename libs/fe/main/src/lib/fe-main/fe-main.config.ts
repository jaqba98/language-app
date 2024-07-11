import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { feRouteRoutes } from '@english-learning/fe-route';

export const feMainConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(feRouteRoutes, withHashLocation()),
  ]
};
