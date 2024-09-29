import { provideMockStore } from '@ngrx/store/testing';

import { StoreModel } from '../model/store.model';
import { courseMock } from './course.mock';

export const storeMock = provideMockStore<StoreModel>({
  initialState: {
    course: courseMock,
  },
});
