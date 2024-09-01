import { bootstrapApplication } from '@angular/platform-browser';

import { MainComponent, mainConfig } from '@english-learning/fe-main';

bootstrapApplication(MainComponent, mainConfig).catch(err => {
  throw new Error(err);
});
