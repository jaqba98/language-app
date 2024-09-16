import { Component, EventEmitter, Output } from '@angular/core';

import {
  AuthComponent,
  ChangePasswordFormComponent,
  ChangePasswordFormModel,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-change-password',
  standalone: true,
  imports: [AuthComponent, ChangePasswordFormComponent],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  @Output() event = new EventEmitter<ChangePasswordFormModel>();

  onEvent(event: ChangePasswordFormModel) {
    this.event.emit(event);
  }
}
