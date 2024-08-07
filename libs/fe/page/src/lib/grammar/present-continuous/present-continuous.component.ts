import { Component } from '@angular/core';

import { GrammarTemplateComponent, GrammarTemplateModel } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-present-continuous',
  standalone: true,
  imports: [GrammarTemplateComponent],
  templateUrl: './present-continuous.component.html',
})
export class PresentContinuousComponent {
  template: GrammarTemplateModel = {
    lines: [
      {
        value: 'Present Continuous',
        type: 'header2',
      },
    ],
  };
}
