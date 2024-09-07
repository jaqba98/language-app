import { Component, EventEmitter, Output } from '@angular/core';

import {
  AuthComponent,
  LoginFormComponent,
  LoginFormModel,
  RouteNavigationService,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [AuthComponent, LoginFormComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Output() event = new EventEmitter<LoginFormModel>();

  constructor(private readonly route: RouteNavigationService) {}

  onEvent(event: LoginFormModel) {
    this.route.navigate('/dashboard');
    this.event.emit(event);
  }
}
