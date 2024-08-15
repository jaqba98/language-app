import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RoutesMenuModel, VocabularyNavComponent } from '@english-learning/fe-ui';
import { VocabularyComponent } from "../vocabulary.component";

@Component({
  selector: 'lib-test1',
  standalone: true,
  imports: [
    RouterOutlet,
    VocabularyNavComponent,
    VocabularyComponent
],
  templateUrl: './test1.component.html',
})
export class Test1Component {
  options: RoutesMenuModel[] = [
    { value: 'Bank', link: '/vocabulary/test1/bank' },
  ];
}
