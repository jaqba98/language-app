import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { StoreModel } from '@english-learning/fe-store';
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

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<StoreModel>,
  ) {
    this.sub = this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      if (name) {
        this.title = name;
        store.select('grammar').subscribe((a) => {
          this.title = a.tabs.find((i) => i.name === name)?.content ?? '';
        }).unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
