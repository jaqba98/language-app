import { Component, Input } from '@angular/core';

import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../misc/flex/flex.component';
import { BankModel } from './bank.model';
import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-bank',
  standalone: true,
  imports: [
    CardComponent,
    FlexComponent,
    TextComponent,
  ],
  templateUrl: './bank.component.html',
})
export class BankComponent {
  @Input({ required: true }) words!: BankModel[];
}
