// Done
import { Component } from '@angular/core';

import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../layout/flex/flex.component';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [FlexComponent, CardComponent],
  templateUrl: './auth.component.html',
})
export class AuthComponent {}
