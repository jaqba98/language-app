import { Component } from '@angular/core';

import { BankComponent } from '@english-learning/fe-ui';
import { test1Words } from '../test1.words';

@Component({
  selector: 'lib-test1-bank',
  standalone: true,
  imports: [BankComponent],
  templateUrl: './test1-bank.component.html',
})
export class Test1BankComponent {
  words = test1Words;
}
