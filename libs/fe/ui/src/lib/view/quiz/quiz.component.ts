import { Component, Input, OnInit } from '@angular/core';
import cloneDeep from 'clone-deep';

import { BankModel } from '../bank/bank.model';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { TextComponent } from '../../misc/text/text.component';
import { InputComponent } from '../../control/input/input.component';
import { PositionComponent } from '../../misc/position/position.component';

@Component({
  selector: 'lib-quiz',
  standalone: true,
  imports: [
    CardComponent,
    FlexComponent,
    TextComponent,
    InputComponent,
    ButtonTextComponent,
    PositionComponent,
  ],
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  @Input({ required: true }) words!: BankModel[];

  currentWords!: BankModel[];

  currentWord!: BankModel;

  successes = 0;

  errors = 0;

  ngOnInit() {
    this.initQuiz();
  }

  onSubmit() {
    this.checkWord();
    this.nextWord();
  }

  initQuiz() {
    this.currentWords = cloneDeep(this.words);
    this.nextWord();
  }

  nextWord() {
    const word = this.currentWords.pop();
    if (!word) return;
    this.currentWord = word;
  }

  checkWord() {
    this.successes += 1;
  }
}
