import { createReducer, on } from '@ngrx/store';

import { CourseStoreModel } from '../model/course-store.model';
import { getCourse } from './course.actions';

const initialCourseState: CourseStoreModel = {
  tasks: new Map(),
};

export const courseReducer = createReducer(
  initialCourseState,
  on(getCourse, state => state),
);
