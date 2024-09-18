import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainNavComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [MainNavComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
