import { Component } from '@angular/core';

import { RouteNavigationService } from '@english-learning/fe-system';

@Component({
  selector: 'lib-logout',
  standalone: true,
  template: '',
})
export class LogoutComponent {
  constructor(private readonly route: RouteNavigationService) {
    this.route.navigate('');
  }
}
