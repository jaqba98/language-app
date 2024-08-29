import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { SectionComponent, SectionNavFormComponent } from '@english-learning/fe-ui';
import { incrementGrammar, decrementGrammar, resetGrammar } from '@english-learning/fe-store';

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    SectionComponent,
    SectionNavFormComponent,
  ],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent {
  counter = 0;

  constructor(private store: Store<{ grammar: number }>) {
    this.store.select('grammar').subscribe((data) => {
      this.counter = data;
    });
  }

  increment() {
    this.store.dispatch(incrementGrammar());
  }

  decrement() {
    this.store.dispatch(decrementGrammar());
  }

  reset() {
    this.store.dispatch(resetGrammar());
  }
}
