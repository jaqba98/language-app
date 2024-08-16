import { Component } from '@angular/core';

import { VocabularyComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-test1',
  standalone: true,
  imports: [VocabularyComponent],
  templateUrl: './test1.component.html',
})
export class Test1Component {}
