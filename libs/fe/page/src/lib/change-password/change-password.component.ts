import { Component, EventEmitter, Output } from '@angular/core';

import { ChangePasswordFormModel } from '@english-learning/fe-form';
import { AuthViewComponent, ChangePasswordFormComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-change-password',
  standalone: true,
  imports: [AuthViewComponent, ChangePasswordFormComponent],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  @Output() event = new EventEmitter<ChangePasswordFormModel>();

  onEvent(event: ChangePasswordFormModel) {
    this.event.emit(event);
  }
}
