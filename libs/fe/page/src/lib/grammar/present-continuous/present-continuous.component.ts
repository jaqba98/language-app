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
        kind: 'text',
        value: 'Present Continuous',
        textType: 'header2',
      },
    ],
  };
}
