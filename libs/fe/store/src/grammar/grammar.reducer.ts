import { createReducer, on } from '@ngrx/store';

import { getGrammar } from './grammar.actions';
import { SectionStoreModel } from '../model/section-store.model';

export const initialGrammarState: SectionStoreModel = {
  tabs: [
    { label: 'Link 1', path: 'link1' },
    { label: 'Link 2', path: 'link2' },
    { label: 'Link 3', path: 'link3' },
  ],
};

export const grammarReducer = createReducer(
  initialGrammarState,
  on(getGrammar, (state) => state),
);
