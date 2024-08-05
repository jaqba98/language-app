import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainNavComponent, FlexComponent, WrapperComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainNavComponent,
    FlexComponent,
    WrapperComponent,
  ],
  templateUrl: './root.component.html',
})
export class RootComponent {}
