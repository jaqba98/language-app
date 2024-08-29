import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  CardComponent, SectionComponent, SectionNavFormComponent, TextComponent,
} from '@english-learning/fe-ui';

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
  title = '';

  private sub!: Subscription;

  constructor(private readonly route: ActivatedRoute) {
    this.sub = this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      if (name) {
        this.title = name;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
