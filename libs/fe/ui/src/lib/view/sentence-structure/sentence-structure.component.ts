import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextComponent } from '../../misc/text/text.component';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../misc/flex/flex.component';

@Component({
  selector: 'lib-sentence-structure',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TextComponent,
    FlexComponent,
  ],
  templateUrl: './sentence-structure.component.html',
})
export class SentenceStructureComponent {
  @Input() items: string[] = [];
}
