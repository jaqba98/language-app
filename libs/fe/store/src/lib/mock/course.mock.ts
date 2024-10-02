// TODO: 1) refactor the file
import { TaskModel } from '@english-learning/fe-domain';
import { CourseStoreModel } from '../model/course-store.model';

export const courseMock: CourseStoreModel = {
  tasks: new Map(),
};

const addTasks = (quantity: number, type: TaskModel['type']) => {
  for (let i = 0; i < quantity; i += 1) {
    const order = courseMock.tasks.size;
    const id = `task${order}`;
    const task: TaskModel = { id, order, type };
    courseMock.tasks.set(task.id, task);
  }
};

addTasks(50, 'done');
addTasks(1, 'active');
addTasks(150, 'blocked');
