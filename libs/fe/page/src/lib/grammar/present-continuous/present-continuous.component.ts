import { Component } from '@angular/core';

import { CardComponent, TextComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-present-continuous',
  standalone: true,
  imports: [
    CardComponent,
    TextComponent,
  ],
  templateUrl: './present-continuous.component.html',
})
export class PresentContinuousComponent {}
