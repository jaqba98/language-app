import { Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { buildActivatedRouteProvider } from '@english-learning/fe-utils';
import { DashboardNavComponent } from '@english-learning/fe-ui';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  static getImports() {
    return [DashboardNavComponent, RouterOutlet];
  }

  static getStorybookImports() {
    return [DashboardNavComponent];
  }

  static getStorybookProviders() {
    return [buildActivatedRouteProvider()];
  }

  static getTemplate() {
    return '<lib-dashboard-nav></lib-dashboard-nav>';
  }
}
