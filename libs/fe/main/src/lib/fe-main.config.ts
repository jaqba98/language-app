import { ApplicationConfig } from '@angular/core';

import { feRouteConfig } from '@english-learning/fe-route';
import { feStoreConfig } from '@english-learning/fe-store';

export const feMainConfig: ApplicationConfig = {
  providers: [...feRouteConfig.providers, ...feStoreConfig.providers],
};
