import { Component, Injector, Input } from '@angular/core';

import {
  BreakpointEnum,
  BreakpointModel,
  BreakpointService,
  ObserverModel,
} from '@english-learning/fe-system';
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
export class TaskWaveComponent
  extends BusinessDirective<TaskModel['id']>
  implements ObserverModel<BreakpointModel>
{
  @Input() taskIds: TaskModel['id'][] = [];

  amplitude = 80;

  frequency = 0.5;

  constructor(
    protected override readonly injector: Injector,
    private readonly breakpoint: BreakpointService,
  ) {
    super(injector, 'course');
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    const { breakpoint } = data;
    if (breakpoint === BreakpointEnum.XSmall) {
      this.amplitude = 80;
    } else {
      this.amplitude = 200;
    }
  }

  onClick(taskId: TaskModel['id']) {
    this.onEvent(taskId);
  }

  getWaveMarkerPosX(index: number) {
    const posX = Math.sin(index * this.frequency) * this.amplitude;
    return {
      transform: `translateX(${posX}px)`,
    };
  }
}
