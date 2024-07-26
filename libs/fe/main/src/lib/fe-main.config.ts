import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { feRoutes } from '@english-learning/fe-route';

const feMainConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(feRoutes, withHashLocation()),
  ],
};

export default feMainConfig;
