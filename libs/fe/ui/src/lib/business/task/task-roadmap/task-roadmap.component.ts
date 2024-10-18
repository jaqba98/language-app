import { Component, Injector } from '@angular/core';

import { FlexComponent } from '@english-learning/fe-component';
import { TaskModel } from '@english-learning/fe-domain';
import { StoreModel, StoreType } from '@english-learning/fe-store';
import { TypeConverterService } from '@english-learning/fe-utils';
import { BusinessDirective } from '../../../base/business.directive';
import { TaskWaveComponent } from '../task-wave/task-wave.component';

@Component({
  selector: 'lib-task-roadmap',
  standalone: true,
  imports: [FlexComponent, TaskWaveComponent],
  templateUrl: './task-roadmap.component.html',
})
/**
 * Task Roadmap Component
 */
export class TaskRoadmapComponent extends BusinessDirective<TaskModel['id']> {
  taskIds: TaskModel['id'][] = [];

  private readonly typeConverter: TypeConverterService;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'task-roadmap', 'course');
    this.typeConverter = this.injector.get(TypeConverterService);
  }

  protected override onStoreChange(store: StoreModel[StoreType]) {
    this.taskIds = this.typeConverter
      .convertMapToArray(store.tasks)
      .sort((taskPrev, taskNext) => taskPrev.order - taskNext.order)
      .map(task => task.id);
  }

  onEvent(taskId: TaskModel['id']) {
    this.emit(taskId);
  }
}
