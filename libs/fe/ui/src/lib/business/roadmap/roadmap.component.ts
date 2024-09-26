import { Component, Injector } from '@angular/core';

import { RoadmapSineWaveComponent } from '../roadmap-sine-wave/roadmap-sine-wave.component';
import { RoadmapSineWaveModel } from '../roadmap-sine-wave/roadmap-sine-wave.model';
import { FlexComponent } from '../../layout/flex/flex.component';
import { ComponentDirective } from '../../base/component.directive';

@Component({
  selector: 'lib-roadmap',
  standalone: true,
  imports: [FlexComponent, RoadmapSineWaveComponent],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
})
export class RoadmapComponent extends ComponentDirective<boolean> {
  model!: RoadmapSineWaveModel;

  constructor(protected override readonly injector: Injector) {
    super(injector);

    this.store.select('course').subscribe(course => {
      this.model = {
        markers: course.tasks.map(task => ({
          type: task.type,
          fontAwesomeType: 'lock',
        })),
      };
    });
  }

  protected override onClick() {
    this.event.emit(true);
  }
}
