import { Component } from '@angular/core';

import { FlexComponent } from '../../layout/flex/flex.component';
import { CardComponent } from '../../misc/card/card.component';
import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-auth-view',
  standalone: true,
  imports: [FlexComponent, CardComponent, TextComponent],
  templateUrl: './auth-view.component.html',
})
/**
 * Auth View Component
 */
export class AuthViewComponent {}
