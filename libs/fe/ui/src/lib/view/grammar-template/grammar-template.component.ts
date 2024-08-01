import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CardComponent } from '../../misc/card/card.component';
import { TextComponent } from '../../misc/text/text.component';
import { GrammarTemplateModel } from './grammar-template.model';

@Component({
  selector: 'lib-grammar-template',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TextComponent,
  ],
  templateUrl: './grammar-template.component.html',
})
export class GrammarTemplateComponent {
  @Input({ required: true }) template!: GrammarTemplateModel;
}
