import { Component } from '@angular/core';

import {
  CardComponent, GrammarTemplateComponent, GrammarTemplateModel, TextComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-present-continuous',
  standalone: true,
  imports: [
    GrammarTemplateComponent,
    CardComponent,
    TextComponent,
  ],
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
