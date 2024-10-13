import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardNavComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [DashboardNavComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
