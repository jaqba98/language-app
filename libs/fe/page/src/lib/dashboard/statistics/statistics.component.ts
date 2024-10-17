import { Component } from '@angular/core';

import { TextComponent } from '@english-learning/fe-component';
import { CardComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-statistics',
  standalone: true,
  imports: [CardComponent, TextComponent],
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent {}
