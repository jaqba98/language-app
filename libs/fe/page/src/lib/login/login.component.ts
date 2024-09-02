import { Component } from '@angular/core';

import { LoginFormComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
