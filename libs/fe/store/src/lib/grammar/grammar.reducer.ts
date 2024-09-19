import { createReducer, on } from '@ngrx/store';

import { getGrammar } from './grammar.actions';
import { SectionStoreModel } from '../model/section-store.model';

export const initialGrammarState: SectionStoreModel = {
  defaultTabId: 'present-simple',
  tabs: [
    {
      id: 'present-simple',
      label: 'Present Simple',
      path: '/grammar/present-simple',
      content: '# Present Simple',
    },
    {
      id: 'present-continuous',
      label: 'Present Continuous',
      path: '/grammar/present-continuous',
      content: '# Present Continuous',
    },
  ],
};

export const grammarReducer = createReducer(
  initialGrammarState,
  on(getGrammar, state => state),
);
