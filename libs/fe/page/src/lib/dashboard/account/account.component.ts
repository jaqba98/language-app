import { Component } from '@angular/core';

import { CardComponent, TextComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-account',
  standalone: true,
  imports: [CardComponent, TextComponent],
  templateUrl: './account.component.html',
})
export class AccountComponent {}
