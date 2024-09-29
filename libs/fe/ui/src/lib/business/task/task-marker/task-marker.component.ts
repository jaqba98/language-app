import { Component, Injector, Input } from '@angular/core';

import { notFoundInTheStore, TaskModel, TasksModel } from '@english-learning/fe-domain';
import { BusinessDirective } from '../../../base/business.directive';
import { ComponentDirective } from '../../../base/component.directive';

@Component({
  selector: 'lib-task-marker',
  standalone: true,
  imports: [...ComponentDirective.buildImports()],
  templateUrl: './task-marker.component.html',
  styleUrl: './task-marker.component.scss',
})
export class TaskMarkerComponent extends BusinessDirective<'course', TaskModel['id']> {
  @Input({ required: true }) taskId: TaskModel['id'] = '';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'course');
  }

  protected override onStoreAction(store: TasksModel) {
    const task = store.tasks.get(this.taskId);
    if (!task) throw new Error(notFoundInTheStore(this.taskId, 'course'));
    this.addClass('task-marker', task.type);
  }

  protected override onClickAction() {
    return this.taskId;
  }
}
