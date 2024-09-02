import { Component, OnDestroy } from '@angular/core';

import {
  CardComponent,
  SectionComponent,
  SectionNavFormComponent,
  TextComponent,
} from '@english-learning/fe-ui';
import { NavigationEndService } from '../../../infrastructure/navigation-end.service';

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    SectionComponent,
    SectionNavFormComponent,
    CardComponent,
    TextComponent,
  ],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent implements OnDestroy {
  content = '';

  // private sub: Subscription;

  constructor(private readonly navigationEnd: NavigationEndService) {
    // this.sub = this.navigationEnd
    //   .getEvent('grammar')
    //   .subscribe(data => {
    //     if (data) {
    //       this.content = data.content;
    //     }
    //   });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}