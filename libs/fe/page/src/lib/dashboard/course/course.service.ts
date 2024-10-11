import { Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardService } from '../dashboard.service';

@Injectable({ providedIn: 'root' })
export class CourseService {
  static getImports() {
    return [RouterOutlet];
  }

  static getStorybookImports() {
    return DashboardService.getStorybookImports();
  }

  static getStorybookProviders() {
    return DashboardService.getStorybookProviders();
  }

  static getTemplate() {
    return DashboardService.getTemplate();
  }
}
