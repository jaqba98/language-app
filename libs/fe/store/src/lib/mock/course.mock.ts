import { CourseStoreModel } from '../model/course-store.model';

export const courseMock: CourseStoreModel = {
  tasks: new Map([
    ['task1', { id: 'task1', order: 0, type: 'done' }],
    ['task2', { id: 'task2', order: 1, type: 'active' }],
    ['task3', { id: 'task3', order: 2, type: 'blocked' }],
  ]),
};
