import { Component } from '@angular/core';

import { RoutesMenuModel, SectionComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-test1',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './test1.component.html',
})
export class Test1Component {
  options: RoutesMenuModel[] = [
    { value: 'Bank', link: '/vocabulary/test1/bank' },
  ];
}
