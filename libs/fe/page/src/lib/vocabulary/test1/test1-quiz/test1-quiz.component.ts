import { Component } from '@angular/core';
import cloneDeep from 'clone-deep';

import {
  BankModel,
  ButtonTextComponent,
  CardComponent,
  QuizComponent,
  TextComponent,
} from '@english-learning/fe-ui';
import { test1Words } from '../test1.words';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-test1-quiz',
  standalone: true,
  imports: [
    QuizComponent,
    FormsModule,
    CardComponent,
    TextComponent,
    ButtonTextComponent,
  ],
  templateUrl: './test1-quiz.component.html',
})
export class Test1QuizComponent {
  currentWord!: BankModel;

  success = 0;

  error = 0;

  input2!: string;

  words: BankModel[] = [];

  constructor() {
    this.words = cloneDeep(test1Words);
    this.getWord();
  }

  onClick() {
    if (this.input2 === this.currentWord.english) {
      this.success++;
    } else {
      this.error++;
    }
    this.getWord();
    this.input2 = "";
  }

  getWord() {
    if (this.words.length === 0) return;
    const word = this.words.pop();
    if (!word) return;
    this.currentWord = word;
  }
}
