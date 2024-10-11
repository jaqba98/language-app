import { Component } from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: DashboardService.getImports(),
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
