import { TaskModel } from '../model/domain/tasks-domain.model';

export const notFoundInTheStore = (taskId: TaskModel['id'], store: string) =>
  `Not found ${taskId} in the ${store} store!`;

export const notSupportedType = (type: string) => `Not supported ${type} type!`;

export const methodNotImplemented = () => 'Method not implemented.';

export const notDefined = (property: string) => `The ${property} is not defined!`;
