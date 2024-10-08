import { TaskModel } from '../model/domain/tasks-domain.model';

// TODO: Bad error message
export const notFoundInTheStore = (taskId: TaskModel['id']) =>
  `Not found ${taskId} in the store!`;

// TODO: Bad error message
export const notSupportedType = () => 'Not supported type!';

export const elementByIdExistError = (element: string, id: string) =>
  `${element} by id: ${id} already exists!`;

export const elementByIdNotExistError = (element: string, id: string) =>
  `${element} by id: ${id} does not exists!`;

export const unsupportedTypeError = (element: string, type: string) =>
  `Unsupported ${element} type: ${type}!`;
