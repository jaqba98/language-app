import { createAction } from '@ngrx/store';

export const incrementGrammar = createAction('[English/Learning] Increment Grammar');

export const decrementGrammar = createAction('[English/Learning] Decrement Grammar');

export const resetGrammar = createAction('[English/Learning] Reset Grammar');
