import { Component, Injector } from '@angular/core';
import { TaskModel } from '@english-learning/fe-domain';

import { BusinessDirective, TaskRoadmapComponent } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-tasks',
  standalone: true,
  imports: [TaskRoadmapComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent extends BusinessDirective<TaskModel['id']> {
  constructor(protected override readonly injector: Injector) {
    super(injector, 'course');
  }

  onClick(taskId: TaskModel['id']) {
    this.onEvent(taskId);
  }
}
