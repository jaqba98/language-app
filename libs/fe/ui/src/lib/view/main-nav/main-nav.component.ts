import { Component } from '@angular/core';

import { CardComponent } from '../../misc/card/card.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';

@Component({
  selector: 'lib-main-nav',
  standalone: true,
  imports: [
    CardComponent,
    ButtonIconComponent,
    ButtonTextComponent
  ],
  templateUrl: './main-nav.component.html'
})
export class MainNavComponent {}
