import { TaskType } from '../../type/task.type';
import { IdModel, TypeModel } from '../base/base.model';

interface TaskModel extends IdModel, TypeModel<TaskType> {}

interface TasksModel {
  tasks: TaskModel[];
}

export type TasksDomainModel = TasksModel;
