import { Component, Injector, Input } from '@angular/core';

import { StoreModel, StoreType } from '@english-learning/fe-store';
import {
  notFoundInTheStore,
  notSupportedType,
  TaskModel,
} from '@english-learning/fe-domain';
import { BusinessDirective } from '../../../base/business.directive';
import { ComponentDirective } from '../../../base/component.directive';
import { FontAwesomeComponent } from '../../../external/font-awesome/font-awesome.component';
import {
  FontAwesomeColorType,
  FontAwesomeType,
} from '../../../external/font-awesome/font-awesome.type';
import { FlexComponent } from '../../../layout/flex/flex.component';

@Component({
  selector: 'lib-task-marker',
  standalone: true,
  imports: [...ComponentDirective.buildImports(), FlexComponent, FontAwesomeComponent],
  templateUrl: './task-marker.component.html',
  styleUrl: './task-marker.component.scss',
})
export class TaskMarkerComponent extends BusinessDirective<TaskModel['id']> {
  @Input({ required: true }) taskId: TaskModel['id'] = '';

  type: FontAwesomeType = 'lock';

  color: FontAwesomeColorType = 'gray';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'course');
  }

  onClick() {
    this.onEvent(this.taskId);
  }

  protected override onStoreChange(store: StoreModel[StoreType]): void {
    const task = store.tasks.get(this.taskId);
    if (!task) throw new Error(notFoundInTheStore(this.taskId, 'course'));
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
        throw new Error(notSupportedType('font awesome'));
    }
  }
}
