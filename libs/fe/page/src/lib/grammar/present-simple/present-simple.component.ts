import { Component } from '@angular/core';

import { GrammarTemplateComponent, GrammarTemplateModel, TextEnum } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-present-simple',
  standalone: true,
  imports: [GrammarTemplateComponent],
  templateUrl: './present-simple.component.html',
})
export class PresentSimpleComponent {
  template: GrammarTemplateModel = {
    title: {
      value: 'Present Simple',
      type: TextEnum.header2
    }
  };
}
