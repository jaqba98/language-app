import { Component } from '@angular/core';

import {
  CardComponent,
  FlexComponent,
  LoginFormComponent,
  WrapperComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [
    WrapperComponent,
    FlexComponent,
    CardComponent,
    LoginFormComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
