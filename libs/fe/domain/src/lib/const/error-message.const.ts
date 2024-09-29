import { TaskModel } from '../model/domain/tasks-domain.model';

export const notFoundInTheStore = (taskId: TaskModel['id'], store: string) =>
  `Not found ${taskId} in the ${store} store!`;
