import { Component } from '@angular/core';

import { QuizComponent } from '@english-learning/fe-ui';
import { test1Words } from '../test1.words';

@Component({
  selector: 'lib-test1-quiz',
  standalone: true,
  imports: [QuizComponent],
  templateUrl: './test1-quiz.component.html',
})
export class Test1QuizComponent {
  words = test1Words;
}
