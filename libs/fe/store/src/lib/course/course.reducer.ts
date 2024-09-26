import { createReducer, on } from '@ngrx/store';

import { getCourse } from './course.actions';
import { CourseStoreModel } from '../model/course-store.model';

export const initialCourseState: CourseStoreModel = {
  tasks: [],
};

export const courseReducer = createReducer(
  initialCourseState,
  on(getCourse, state => state),
);
