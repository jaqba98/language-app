import { Component } from '@angular/core';

import {
  CardComponent,
  TextComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CardComponent, TextComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
