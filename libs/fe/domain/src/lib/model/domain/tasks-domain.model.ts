import { TaskType } from '../../type/task.type';
import { IdModel, TypeModel } from '../base/base.model';

export interface TaskModel extends IdModel, TypeModel<TaskType> {}

export interface TasksModel {
  tasks: Map<TaskModel['id'], TaskModel>;
}

export type TasksDomainModel = TasksModel;
