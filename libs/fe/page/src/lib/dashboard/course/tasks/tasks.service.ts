import { Injectable } from '@angular/core';

import { storeMock } from '@english-learning/fe-store';
import { PaddingComponent, TaskRoadmapComponent } from '@english-learning/fe-ui';
import { CourseService } from '../course.service';

@Injectable({ providedIn: 'root' })
export class TasksService {
  static getImports() {
    return [TaskRoadmapComponent, PaddingComponent];
  }

  static getStorybookImports() {
    return [...CourseService.getStorybookImports(), ...TasksService.getImports()];
  }

  static getStorybookProviders() {
    return [...CourseService.getStorybookProviders(), storeMock];
  }

  static getTemplate() {
    return CourseService.getTemplate().concat(
      `
        <lib-padding padding="large">
          <lib-task-roadmap (event)="onClick($event)"></lib-task-roadmap>
        </lib-padding>
      `,
    );
  }
}
