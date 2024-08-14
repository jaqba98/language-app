import { Component } from '@angular/core';

import { CardComponent, TextComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-test1',
  standalone: true,
  imports: [
    CardComponent,
    TextComponent,
  ],
  templateUrl: './test1.component.html',
})
export class Test1Component {
}
