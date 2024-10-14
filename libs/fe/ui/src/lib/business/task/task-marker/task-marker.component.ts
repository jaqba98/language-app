import { Component, Input, Injector } from '@angular/core';
import { NgClass } from '@angular/common';

import {
  TaskModel,
  notFoundInTheStore,
  notValueInEnum,
} from '@english-learning/fe-domain';
import { StoreModel, StoreType } from '@english-learning/fe-store';
import { BusinessDirective } from '../../../base/business.directive';
import {
  FontAwesomeType,
  FontAwesomeColorType,
} from '../../../external/font-awesome/font-awesome.type';
import { FlexComponent } from '../../../layout/flex/flex.component';
import { FontAwesomeComponent } from '../../../external/font-awesome/font-awesome.component';
import { ClickActionDirective } from '../../../action/click-action.directive';

@Component({
  selector: 'lib-task-marker',
  standalone: true,
  imports: [NgClass, FlexComponent, FontAwesomeComponent, ClickActionDirective],
  templateUrl: './task-marker.component.html',
  styleUrl: './task-marker.component.scss',
})
/**
 * Task Marker Component
 */
export class TaskMarkerComponent extends BusinessDirective<TaskModel['id']> {
  @Input({ required: true }) taskId!: TaskModel['id'];

  type: FontAwesomeType = 'lock';

  color: FontAwesomeColorType = 'gray';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'course');
  }

  onEvent(eventData: TaskModel['id']) {
    this.emit(eventData);
  }

  protected override beforeBusinessInit() {
    this.addClassName('task-marker');
  }

  protected override onStoreChange(store: StoreModel[StoreType]) {
    const task = store.tasks.get(this.taskId);
    if (!task) throw new Error(notFoundInTheStore(this.taskId));
    this.addClassName('task-marker', task.type);
    this.setFontAwesome(task.type);
  }

  private setFontAwesome(type: TaskModel['type']) {
    switch (type) {
      case 'blocked':
        this.type = 'lock';
        this.color = 'gray';
        return;
      case 'active':
        this.type = 'play';
        this.color = 'green';
        return;
      case 'done':
        this.type = 'star';
        this.color = 'gold';
        return;
      default:
        throw new Error(notValueInEnum(type, 'TaskModel["type"]'));
    }
  }
}
