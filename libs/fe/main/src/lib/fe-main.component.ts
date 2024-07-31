import { Component } from '@angular/core';

import { RootComponent } from '@english-learning/fe-page';

@Component({
  selector: 'lib-fe-main',
  standalone: true,
  imports: [RootComponent],
  template: '<lib-root></lib-root>',
})
export class FeMainComponent {}
