import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  CardComponent,
  TextComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-test1-quiz',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TextComponent,
  ],
  templateUrl: './test1-quiz.component.html',
})
export class Test1QuizComponent {
}
