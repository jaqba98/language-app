import { Component, Input } from '@angular/core';

import { RoadmapSineWaveComponent } from '../roadmap-sine-wave/roadmap-sine-wave.component';
import { RoadmapSineWaveModel } from '../roadmap-sine-wave/roadmap-sine-wave.model';
import { FlexComponent } from '../../layout/flex/flex.component';

@Component({
  selector: 'lib-roadmap',
  standalone: true,
  imports: [FlexComponent, RoadmapSineWaveComponent],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
})
export class RoadmapComponent {
  @Input() model: RoadmapSineWaveModel = {
    markers: [],
  };
}
