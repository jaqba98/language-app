import { createReducer, on } from '@ngrx/store';

import { getGrammar } from './grammar.actions';
import { SectionStoreModel } from '../model/section-store.model';

export const initialGrammarState: SectionStoreModel = {
  tabs: [
    {
      name: 'present-simple',
      label: 'Present Simple',
      path: '/grammar/present-simple',
      isDefault: true,
      content: '# Present Simple',
    },
    {
      name: 'present-continuous',
      label: 'Present Continuous',
      path: '/grammar/present-continuous',
      isDefault: false,
      content: '# Present Continuous',
    },
  ],
};

export const grammarReducer = createReducer(
  initialGrammarState,
  on(getGrammar, (state) => state),
);
