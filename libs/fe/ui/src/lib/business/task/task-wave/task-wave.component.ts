import { Component, Injector, Input } from '@angular/core';

import { TaskModel } from '@english-learning/fe-domain';
import { ComponentDirective } from '../../../base/component.directive';
import { BusinessDirective } from '../../../base/business.directive';
import { TaskMarkerComponent } from '../task-marker/task-marker.component';

@Component({
  selector: 'lib-task-wave',
  standalone: true,
  imports: [...ComponentDirective.buildImports(), TaskMarkerComponent],
  templateUrl: './task-wave.component.html',
  styleUrl: './task-wave.component.scss',
})
export class TaskWaveComponent extends BusinessDirective<TaskModel['id']> {
  @Input() taskIds: TaskModel['id'][] = [];

  constructor(protected override readonly injector: Injector) {
    super(injector, 'course');
  }

  onClick(taskId: TaskModel['id']) {
    this.onEvent(taskId);
  }
}
