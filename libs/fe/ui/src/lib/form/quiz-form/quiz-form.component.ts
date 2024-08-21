import { Component, EventEmitter, Output } from '@angular/core';

import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum } from '../base-form/base-form.model';

@Component({
  selector: 'lib-quiz-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './quiz-form.component.html',
})
export class QuizFormComponent {
  @Output() quizFormEvent = new EventEmitter();

  quizForm: BaseFormModel = {
    controls: [
      { kind: ControlKindEnum.input, name: 'answer', defaultValue: '' },
      {
        kind: ControlKindEnum.buttonText, name: 'showAnswer', label: 'Show Answer', isPrimary: false,
      },
      {
        kind: ControlKindEnum.buttonText, name: 'submit', label: 'Submit', isPrimary: true,
      },
    ],
  };

  onEvent(event: Event) {
    this.quizFormEvent.emit(event);
  }
}
