import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapMarkerComponent } from '../roadmap-marker/roadmap-marker.component';
import { RoadmapModel } from './roadmap.model';
import { GridComponent } from '../../layout/grid/grid.component';
import { GridItemComponent } from '../../layout/grid-item/grid-item.component';

@Component({
  selector: 'lib-roadmap',
  standalone: true,
  imports: [CommonModule, GridComponent, GridItemComponent, RoadmapMarkerComponent],
  templateUrl: './roadmap.component.html',
})
export class RoadmapComponent {
  @Input() model: RoadmapModel = {
    markers: [],
  };
}
