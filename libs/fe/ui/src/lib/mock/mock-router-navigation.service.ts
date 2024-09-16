import { Injectable } from '@angular/core';

import { RouteNavigationService } from '@english-learning/fe-system';

@Injectable()
export class MockRouteNavigationService {
  static getProvider() {
    return {
      provide: RouteNavigationService,
      useClass: MockRouteNavigationService,
    };
  }

  navigate(link: string) {
    // eslint-disable-next-line no-console
    console.log(link);
  }
}
