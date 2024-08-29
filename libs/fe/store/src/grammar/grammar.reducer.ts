import { createReducer, on } from '@ngrx/store';

import { incrementGrammar, decrementGrammar, resetGrammar } from './grammar.actions';

export const initialGrammarState = 0;

export const grammarReducer = createReducer(
  initialGrammarState,
  on(incrementGrammar, (state) => state + 1),
  on(decrementGrammar, (state) => state - 1),
  on(resetGrammar, () => 0),
);
