import { Component } from '@angular/core';

import { CardComponent, TextComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-vocabulary',
  standalone: true,
  imports: [
    CardComponent,
    TextComponent,
  ],
  templateUrl: './vocabulary.component.html',
})
export class VocabularyComponent {
}
