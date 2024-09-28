import { TaskTypeEnum } from '../enum/task-type.enum';

export type TaskType = keyof typeof TaskTypeEnum;
