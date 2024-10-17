import { Component } from '@angular/core';

import { TextComponent } from '@english-learning/fe-component';
import { CardComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-account',
  standalone: true,
  imports: [CardComponent, TextComponent],
  templateUrl: './account.component.html',
})
export class AccountComponent {}
