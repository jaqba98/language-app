import { createReducer, on } from '@ngrx/store';

import { CourseStoreModel } from '../model/course-store.model';
import { getCourse } from './course.actions';
import { courseMock } from '../mock/course.mock';

const initialCourseState: CourseStoreModel = courseMock;

export const courseReducer = createReducer(
  initialCourseState,
  on(getCourse, state => state),
);
