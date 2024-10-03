import { TaskModel } from '@english-learning/fe-domain';
import { CourseStoreModel } from '@english-learning/fe-store';

export const courseMock: CourseStoreModel = {
  tasks: new Map(),
};

const addCourseMockTasks = (quantity: number, type: TaskModel['type']) => {
  for (let q = 0; q < quantity; q += 1) {
    const order = courseMock.tasks.size;
    const id = `task${order}`;
    const task: TaskModel = { id, order, type };
    courseMock.tasks.set(task.id, task);
  }
};

addCourseMockTasks(50, 'done');
addCourseMockTasks(1, 'active');
addCourseMockTasks(100, 'blocked');
