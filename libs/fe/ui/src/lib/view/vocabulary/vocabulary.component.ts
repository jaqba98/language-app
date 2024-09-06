import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from '../../misc/card/card.component';
import { FlexComponent } from '../../layout/flex/flex.component';

@Component({
  selector: 'lib-vocabulary',
  standalone: true,
  imports: [CommonModule, FlexComponent, CardComponent, RouterOutlet],
  templateUrl: './vocabulary.component.html',
})
export class VocabularyComponent implements OnInit {
  @Input({ required: true }) route!: string;

  // options: RoutesMenuModel[] = [];

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    // this.options = [
    //   { value: 'Bank', link: `/vocabulary/${this.route}/bank` },
    //   { value: 'Quiz', link: `/vocabulary/${this.route}/quiz` },
    // ];
  }
}
