import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { RoutesMenuModel } from '../../model/routes-menu.model';

@Component({
  selector: 'lib-vocabulary-nav',
  standalone: true,
  imports: [
    CommonModule,
    FlexComponent,
    CardComponent,
    ButtonTextComponent,
  ],
  templateUrl: './vocabulary-nav.component.html',
})
export class VocabularyNavComponent {
  @Input({ required: true }) options!: RoutesMenuModel[];
}
