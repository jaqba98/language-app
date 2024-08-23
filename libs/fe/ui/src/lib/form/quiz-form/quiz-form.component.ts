import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum } from '../base-form/base-form.model';
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
        defaultValue: '',
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'showAnswer',
        label: 'Show Answer',
        isPrimary: false,
        fullWidth: true,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'submitAnswer',
        label: 'Submit',
        isPrimary: true,
        fullWidth: true,
      },
    ],
  };

  onEvent(baseForm: QuizFormModel) {
    this.quizFormEvent.emit(baseForm);
  }
}
