// I am here
import { Component } from '@angular/core';

import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../layout/flex/flex.component';
import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [FlexComponent, TextComponent, CardComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
