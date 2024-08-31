import { Component } from '@angular/core';

import { RootComponent } from '@english-learning/fe-page';

@Component({
  selector: 'lib-fe-main',
  standalone: true,
  imports: [RootComponent],
  templateUrl: './fe-main.component.html',
})
export class FeMainComponent {}
