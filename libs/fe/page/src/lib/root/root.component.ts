import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainNavComponent, FlexComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainNavComponent,
    FlexComponent,
  ],
  templateUrl: './root.component.html',
})
export class RootComponent {}
