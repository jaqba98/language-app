import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BaseFormComponent } from '../base-form/base-form.component';
import {
  BaseFormModel,
  ControlKindEnum,
} from '../base-form/base-form.model';
import { QuizFormModel } from './quiz-form.model';

@Component({
  selector: 'lib-quiz-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './quiz-form.component.html',
})
export class QuizFormComponent {
  @Output() quizFormEvent = new EventEmitter<QuizFormModel>();

  quizForm: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.input,
        name: 'answer',
        label: '',
        defaultValue: '',
        placeholder: '',
        type: 'text',
        validators: [],
        control: new FormControl(''),
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'showAnswer',
        label: 'Show Answer',
        isPrimary: false,
        validators: [],
        control: new FormControl(''),
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'submitAnswer',
        label: 'Submit',
        isPrimary: true,
        validators: [],
        control: new FormControl(''),
      },
    ],
  };

  onEvent(baseForm: QuizFormModel) {
    this.quizFormEvent.emit(baseForm);
  }
}
