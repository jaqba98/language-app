import { Component, Input, Injector } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

import { TaskModel } from '@english-learning/fe-domain';
import {
  ObserverModel,
  BreakpointModel,
  BreakpointService,
  BreakpointEnum,
} from '@english-learning/fe-system';
import { BusinessDirective } from '../../../base/business.directive';
import { TaskMarkerComponent } from '../task-marker/task-marker.component';
import { ClickActionDirective } from '../../../action/click-action.directive';

@Component({
  selector: 'lib-task-wave',
  standalone: true,
  imports: [NgFor, NgStyle, TaskMarkerComponent, ClickActionDirective],
  templateUrl: './task-wave.component.html',
  styleUrl: './task-wave.component.scss',
})
/**
 * Task Wave Component
 */
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
    super(injector, 'task-wave', 'course');
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    const { breakpoint } = data;
    this.amplitude = breakpoint === BreakpointEnum.XSmall ? 80 : 100;
  }

  onEvent(taskId: TaskModel['id']) {
    this.emit(taskId);
  }

  getWaveMarkerPosX(index: number) {
    const posX = Math.sin(index * this.frequency) * this.amplitude;
    return {
      transform: `translateX(${posX}px)`,
    };
  }
}
