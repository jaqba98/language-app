import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RoutesMenuModel } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-test1',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './test1.component.html',
})
export class Test1Component {
  options: RoutesMenuModel[] = [
    { value: 'Bank', link: '/vocabulary/test1/bank' },
  ];
}
