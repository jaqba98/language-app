import { Component } from '@angular/core';

import { RoadmapMarkerComponent } from '../roadmap-marker/roadmap-marker.component';

@Component({
  selector: 'lib-roadmap',
  standalone: true,
  imports: [RoadmapMarkerComponent],
  templateUrl: './roadmap.component.html',
})
export class RoadmapComponent {}
