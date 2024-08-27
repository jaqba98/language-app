import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainNavComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-root',
  standalone: true,
  imports: [
    MainNavComponent,
    RouterOutlet,
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {}
