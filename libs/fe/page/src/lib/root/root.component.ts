import { Component } from '@angular/core';

import { MainNavComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-root',
  standalone: true,
  imports: [MainNavComponent],
  templateUrl: './root.component.html',
})
export class RootComponent {}
