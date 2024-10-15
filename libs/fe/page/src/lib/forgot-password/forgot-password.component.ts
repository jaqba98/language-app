import { Component, EventEmitter, Output } from '@angular/core';

import {
  AuthViewComponent,
  ForgotPasswordFormComponent,
  ForgotPasswordFormModel,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-forgot-password',
  standalone: true,
  imports: [AuthViewComponent, ForgotPasswordFormComponent],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  @Output() event = new EventEmitter<ForgotPasswordFormModel>();

  onEvent(event: ForgotPasswordFormModel) {
    this.event.emit(event);
  }
}
