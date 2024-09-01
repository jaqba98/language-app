import { Component } from '@angular/core';

import { RootComponent } from '@english-learning/fe-page';

@Component({
  selector: 'lib-main',
  standalone: true,
  imports: [RootComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
