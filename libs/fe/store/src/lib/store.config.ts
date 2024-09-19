import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';

import { grammarReducer } from './grammar/grammar.reducer';

export const storeConfig: ApplicationConfig = {
  providers: [provideStore({ grammar: grammarReducer })],
};
