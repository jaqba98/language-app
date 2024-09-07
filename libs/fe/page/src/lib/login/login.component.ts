import { Component, EventEmitter, Output } from '@angular/core';

import {
  AuthComponent,
  LoginFormComponent,
  LoginFormModel,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [AuthComponent, LoginFormComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Output() event = new EventEmitter<LoginFormModel>();

  onEvent(event: LoginFormModel) {
    this.event.emit(event);
  }
}
