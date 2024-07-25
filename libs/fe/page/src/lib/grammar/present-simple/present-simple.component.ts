import { Component } from '@angular/core';

import { CardComponent, TextComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-present-simple',
  standalone: true,
  imports: [
    CardComponent,
    TextComponent
  ],
  templateUrl: './present-simple.component.html',
  styleUrl: './present-simple.component.scss'
})
export class PresentSimpleComponent {}
