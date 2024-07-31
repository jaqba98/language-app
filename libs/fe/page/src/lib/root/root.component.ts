import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainNavComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainNavComponent,
  ],
  templateUrl: './root.component.html',
})
export class RootComponent {}
