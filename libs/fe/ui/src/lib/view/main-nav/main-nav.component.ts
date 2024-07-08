import { Component } from '@angular/core';

import { CardComponent } from '../../misc/card/card.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';

@Component({
  selector: 'lib-main-nav',
  standalone: true,
  imports: [
    CardComponent,
    ButtonIconComponent
  ],
  templateUrl: './main-nav.component.html'
})
export class MainNavComponent {}
