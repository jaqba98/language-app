import { Component, Injector } from '@angular/core';

import { TaskModel } from '@english-learning/fe-domain';
import { StoreModel, StoreType } from '@english-learning/fe-store';
import { TypeConverterService } from '@english-learning/fe-utils';
import { BusinessDirective } from '../../../base/business.directive';
import { ComponentDirective } from '../../../base/component.directive';
import { TaskMarkerComponent } from '../task-marker/task-marker.component';
import { FlexComponent } from '../../../layout/flex/flex.component';

@Component({
  selector: 'lib-task-roadmap',
  standalone: true,
  imports: [...ComponentDirective.buildImports(), FlexComponent, TaskMarkerComponent],
  templateUrl: './task-roadmap.component.html',
})
export class TaskRoadmapComponent extends BusinessDirective<TaskModel['id']> {
  taskIds: TaskModel['id'][] = [];

  constructor(
    protected override readonly injector: Injector,
    private readonly typeConverter: TypeConverterService,
  ) {
    super(injector, 'course');
  }

  protected override onStoreChange(store: StoreModel[StoreType]) {
    this.taskIds = this.typeConverter
      .convertMapToArray(store.tasks)
      .sort((taskPrev, taskNext) => taskPrev.order - taskNext.order)
      .map(task => task.id);
  }

  onClick(taskId: TaskModel['id']) {
    this.onEvent(taskId);
  }
}
