import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withHashLocation,
  withInMemoryScrolling,
} from '@angular/router';

import { feRoutes } from '@english-learning/fe-route';
import { feStoreConfig } from '@english-learning/fe-store';

export const feMainConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      feRoutes,
      withHashLocation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    ...feStoreConfig.providers,
  ],
};
