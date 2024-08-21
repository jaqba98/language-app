import { Component, Input, OnInit } from '@angular/core';
import cloneDeep from 'clone-deep';

import { BankModel } from '../bank/bank.model';
import { ButtonTextOldComponent } from '../../control/button-text-old/button-text-old.component';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { TextComponent } from '../../misc/text/text.component';
import { PositionComponent } from '../../misc/position/position.component';
import { CounterComponent } from '../../misc/counter/counter.component';
import { QuizFormComponent } from '../../form/quiz-form/quiz-form.component';
import { QuizFormModel } from '../../form/quiz-form/quiz-form.model';

@Component({
  selector: 'lib-quiz',
  standalone: true,
  imports: [
    CardComponent,
    FlexComponent,
    TextComponent,
    ButtonTextOldComponent,
    PositionComponent,
    CounterComponent,
    QuizFormComponent,
  ],
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  @Input({ required: true }) words!: BankModel[];

  currentWords!: BankModel[];

  currentWord!: BankModel;

  successes = 0;

  errors = 0;

  input!: string;

  ngOnInit() {
    this.initQuiz();
  }

  onSubmit(event: QuizFormModel) {
    this.input = event.answer;
    this.checkWord();
    this.nextWord();
  }

  onRestart() {
    this.initQuiz();
  }

  initQuiz() {
    this.successes = 0;
    this.errors = 0;
    this.currentWords = cloneDeep(this.words);
    this.nextWord();
  }

  nextWord() {
    const word = this.currentWords.pop();
    if (!word) return;
    this.currentWord = word;
    this.input = '';
  }

  checkWord() {
    if (this.input === this.currentWord.english) {
      this.successes += 1;
      return;
    }
    this.errors += 1;
  }
}
