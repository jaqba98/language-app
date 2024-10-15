import { Component, EventEmitter, Output } from '@angular/core';

import {
  AuthViewComponent,
  RegistrationFormComponent,
  RegistrationFormModel,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-registration',
  standalone: true,
  imports: [AuthViewComponent, RegistrationFormComponent],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  @Output() event = new EventEmitter<RegistrationFormModel>();

  onEvent(event: RegistrationFormModel) {
    this.event.emit(event);
  }
}
