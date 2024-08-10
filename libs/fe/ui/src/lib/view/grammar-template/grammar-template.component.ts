import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CardComponent } from '../../misc/card/card.component';
import { TextComponent } from '../../misc/text/text.component';
import { GrammarTemplateModel } from './grammar-template.model';
import { FlexComponent } from '../../misc/flex/flex.component';
import { MultilineTextComponent } from '../../misc/multiline-text/multiline-text.component';
import { HeaderComponent } from '../../misc/header/header.component';
import { ListComponent } from '../../misc/list/list.component';
import { SentenceStructureComponent } from '../sentence-structure/sentence-structure.component';

@Component({
  selector: 'lib-grammar-template',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TextComponent,
    FlexComponent,
    MultilineTextComponent,
    HeaderComponent,
    ListComponent,
    SentenceStructureComponent,
  ],
  templateUrl: './grammar-template.component.html',
})
export class GrammarTemplateComponent {
  @Input({ required: true }) template!: GrammarTemplateModel;
}
