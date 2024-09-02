import { Component } from '@angular/core';

import {
  AuthComponent,
  LoginFormComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [AuthComponent, LoginFormComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
