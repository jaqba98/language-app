import { provideMockStore } from '@ngrx/store/testing';

import { StoreModel } from '@english-learning/fe-store';
import { courseMock } from './course.mock';

export const storeMock = provideMockStore<StoreModel>({
  initialState: {
    course: courseMock,
  },
});
