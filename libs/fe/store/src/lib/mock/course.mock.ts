import { CourseStoreModel } from '../model/course-store.model';

export const courseMock: CourseStoreModel = {
  tasks: new Map([
    ['1', { id: '1', type: 'done' }],
    ['2', { id: '2', type: 'active' }],
    ['3', { id: '3', type: 'blocked' }],
  ]),
};
