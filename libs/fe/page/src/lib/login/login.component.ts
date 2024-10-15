import { Component, Injector } from '@angular/core';

import { RouteNavigationService } from '@english-learning/fe-system';
import {
  AuthViewComponent,
  EventEmitterDirective,
  LoginFormComponent,
  LoginFormModel,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [AuthViewComponent, LoginFormComponent],
  templateUrl: './login.component.html',
})
/**
 * Login Component
 */
export class LoginComponent extends EventEmitterDirective<LoginFormModel> {
  constructor(
    protected override readonly injector: Injector,
    private readonly route: RouteNavigationService,
  ) {
    super(injector);
  }

  onEvent(event: LoginFormModel) {
    this.route.navigate('/dashboard');
    this.emit(event);
  }
}
