import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import cloneDeep from 'clone-deep';

import {
  BankModel,
  ButtonTextComponent,
  CardComponent,
  TextComponent,
} from '@english-learning/fe-ui';
import { test1Words } from '../test1.words';

@Component({
  selector: 'lib-test1-quiz',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TextComponent,
    ButtonTextComponent,
  ],
  templateUrl: './test1-quiz.component.html',
})
export class Test1QuizComponent {
  words: BankModel[] = [];

  constructor() {
    this.words = cloneDeep(test1Words);
  }

  onClick() {
    this.words.pop();
  }
}
