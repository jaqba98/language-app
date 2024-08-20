import { Component, Input, OnInit } from '@angular/core';
import cloneDeep from 'clone-deep';

import { BankModel } from '../bank/bank.model';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { TextComponent } from '../../misc/text/text.component';
import { InputOldComponent } from '../../control/input-old/input-old.component';
import { PositionComponent } from '../../misc/position/position.component';
import { CounterComponent } from '../../misc/counter/counter.component';

@Component({
  selector: 'lib-quiz',
  standalone: true,
  imports: [
    CardComponent,
    FlexComponent,
    TextComponent,
    InputOldComponent,
    ButtonTextComponent,
    PositionComponent,
    CounterComponent,
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

  onSubmit() {
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
