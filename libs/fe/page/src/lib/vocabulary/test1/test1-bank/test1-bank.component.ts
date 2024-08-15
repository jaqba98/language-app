import { Component } from '@angular/core';

import { CardComponent, TextComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-test1-bank',
  standalone: true,
  imports: [
    CardComponent,
    TextComponent,
  ],
  templateUrl: './test1-bank.component.html',
})
export class Test1BankComponent {
}
