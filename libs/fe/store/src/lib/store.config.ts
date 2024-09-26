import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';

import { courseReducer } from './course/course.reducer';

export const storeConfig: ApplicationConfig = {
  providers: [provideStore({ course: courseReducer })],
};
