import { Component, Injector } from '@angular/core';

import { EventEmitterDirective } from '@english-learning/fe-ui';
import { TasksService } from './tasks.service';

@Component({
  selector: 'lib-tasks',
  standalone: true,
  imports: TasksService.getImports(),
  templateUrl: './tasks.component.html',
})
/**
 * Tasks Component
 */
export class TasksComponent extends EventEmitterDirective<string> {
  constructor(protected override readonly injector: Injector) {
    super(injector, 'tasks');
  }

  onEvent(event: string) {
    this.emit(event);
  }
}
