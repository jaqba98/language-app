import { provideMockStore } from '@ngrx/store/testing';

import { courseMock } from './course.mock';
import { StoreModel } from '../model/store.model';

export const storeMock = provideMockStore<StoreModel>({
  initialState: {
    course: courseMock,
  },
});
