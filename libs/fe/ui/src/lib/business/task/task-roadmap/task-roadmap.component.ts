import { Component, Injector } from '@angular/core';

import { TaskModel } from '@english-learning/fe-domain';
import { StoreModel, StoreType } from '@english-learning/fe-store';
import { TypeConverterService } from '@english-learning/fe-utils';
import { BusinessDirective } from '../../../base/business.directive';
import { ComponentDirective } from '../../../base/component.directive';
import { TaskWaveComponent } from '../task-wave/task-wave.component';

@Component({
  selector: 'lib-task-roadmap',
  standalone: true,
  imports: [...ComponentDirective.buildImports(), TaskWaveComponent],
  templateUrl: './task-roadmap.component.html',
})
export class TaskRoadmapComponent extends BusinessDirective<TaskModel['id']> {
  taskIds: TaskModel['id'][] = [];

  private readonly typeConverter: TypeConverterService;

  constructor(protected override readonly injector: Injector) {
    super(injector, 'course');
    this.typeConverter = this.injector.get(TypeConverterService);
  }

  protected override onStoreChange(store: StoreModel[StoreType]) {
    this.taskIds = this.typeConverter
      .convertMapToArray(store.tasks)
      .sort((taskPrev, taskNext) => taskPrev.order - taskNext.order)
      .map(task => task.id);
  }
}
