import { createReducer, on } from '@ngrx/store';

import { getGrammar } from './grammar.actions';
import { SectionStoreModel } from '../model/section-store.model';

export const initialGrammarState: SectionStoreModel = {
  tabs: [
    {
      label: 'Present Simple',
      path: '/grammar/present-simple',
      isDefault: true,
    },
    {
      label: 'Present Continuous',
      path: '/grammar/present-continuous',
      isDefault: false,
    },
  ],
};

export const grammarReducer = createReducer(
  initialGrammarState,
  on(getGrammar, (state) => state),
);
