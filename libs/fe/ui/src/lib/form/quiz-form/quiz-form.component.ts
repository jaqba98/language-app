import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { QuizFormModel } from './quiz-form.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';

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
        id: 'answer',
        label: {
          value: '',
          isVisible: false,
        },
        input: {
          defaultValue: '',
          placeholder: '',
          type: 'text',
        },
        validation: {
          validators: [],
          isVisible: true,
        },
      },
      {
        kind: ControlKindEnum.buttonText,
        id: 'showAnswer',
        label: 'Show Answer',
        isSubmit: false,
        validation: {
          validators: [],
          isVisible: true,
        },
      },
      {
        kind: ControlKindEnum.buttonText,
        id: 'submitAnswer',
        label: 'Submit',
        isSubmit: true,
        validation: {
          validators: [],
          isVisible: true,
        },
      },
    ],
  };

  onEvent(baseForm: QuizFormModel) {
    this.quizFormEvent.emit(baseForm);
  }
}
