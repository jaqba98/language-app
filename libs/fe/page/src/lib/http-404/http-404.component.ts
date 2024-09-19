import { Component } from '@angular/core';

import {
  CardComponent,
  TextComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-http-404',
  standalone: true,
  imports: [CardComponent, TextComponent],
  templateUrl: './http-404.component.html',
})
export class Http404Component {}
