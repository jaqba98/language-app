import { ApplicationConfig } from '@angular/core';

import { routeConfig } from '@english-learning/fe-route';
import { storeConfig } from '@english-learning/fe-store';

export const mainConfig: ApplicationConfig = {
  providers: [...routeConfig.providers, ...storeConfig.providers],
};
