import { TaskModel } from '../model/domain/tasks-domain.model';

// TODO: Bad error message
export const notFoundInTheStore = (taskId: TaskModel['id']) =>
  `Not found ${taskId} in the store!`;

export const fieldIsRequiredError = () => 'This field is required.';

export const notCorrectEmailError = () => 'Please enter a valid email address.';

export const invalidInputError = () => 'Invalid input.';

export const notValueInType = (value: string, typeName: string) =>
  `The value ${value} is not exist in the ${typeName} type.`;

export const notValueInEnum = (value: string, enumName: string) =>
  `The value ${value} is not exist in the ${enumName} enum.`;

export const elementByIdExistError = (element: string, id: string) =>
  `${element} by id: ${id} already exists!`;

export const elementByIdNotExistError = (element: string, id: string) =>
  `${element} by id: ${id} does not exists!`;

export const unsupportedTypeError = (element: string, type: string) =>
  `Unsupported ${element} type: ${type}!`;
