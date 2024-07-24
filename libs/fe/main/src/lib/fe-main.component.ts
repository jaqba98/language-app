import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routesMainNav } from '@english-learning/fe-route';
import { MainNavComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-fe-main',
  standalone: true,
  imports: [
    MainNavComponent,
    RouterOutlet
  ],
  templateUrl: './fe-main.component.html'
})
export class FeMainComponent {
  options = routesMainNav;
}
