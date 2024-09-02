import { Component } from '@angular/core';

import {
  FlexComponent,
  LoginFormComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [FlexComponent, LoginFormComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
