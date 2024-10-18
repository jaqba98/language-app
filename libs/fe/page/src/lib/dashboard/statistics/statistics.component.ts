import { Component } from '@angular/core';

import { CardComponent, TextComponent } from '@english-learning/fe-component';

@Component({
  selector: 'lib-statistics',
  standalone: true,
  imports: [CardComponent, TextComponent],
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent {}
