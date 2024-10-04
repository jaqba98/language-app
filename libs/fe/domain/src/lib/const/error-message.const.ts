import { TaskModel } from '../model/domain/tasks-domain.model';

export const notFoundInTheStore = (taskId: TaskModel['id']) =>
  `Not found ${taskId} in the store!`;

export const notSupportedType = () => 'Not supported type!';
