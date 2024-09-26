import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapMarkerComponent } from '../roadmap-marker/roadmap-marker.component';
import {
  RoadmapSineWaveMarkerViewModel,
  RoadmapSineWaveModel,
} from './roadmap-sine-wave.model';
import { GridComponent } from '../../layout/grid/grid.component';
import { GridItemComponent } from '../../layout/grid-item/grid-item.component';
import { GridItemPositionType } from '../../layout/grid-item/grid-item.type';

@Component({
  selector: 'lib-roadmap-sine-wave',
  standalone: true,
  imports: [CommonModule, GridComponent, GridItemComponent, RoadmapMarkerComponent],
  templateUrl: './roadmap-sine-wave.component.html',
})
export class RoadmapSineWaveComponent implements OnInit {
  @Input() model: RoadmapSineWaveModel = {
    markers: [],
  };

  markersView: RoadmapSineWaveMarkerViewModel[] = [];

  ngOnInit() {
    let direction: 'left' | 'right' = 'left';
    let position = 6;
    const size = 2;
    for (let i = 0; i < this.model.markers.length; i += 1) {
      let positionType: GridItemPositionType = 'center';
      if (position >= 12 - size) positionType = 'right';
      else if (position <= size) positionType = 'left';
      this.buildMarkerView(i, position, size, positionType);
      if (direction === 'left') position -= size;
      else position += size;
      if (position >= 12 - size) direction = 'left';
      else if (position <= size) direction = 'right';
    }
  }

  private buildMarkerView(
    i: number,
    position: number,
    size: number,
    positionType: GridItemPositionType,
  ) {
    this.markersView.push({
      ...this.model.markers[i],
      colStart: position,
      colEnd: position + size,
      rowStart: i,
      rowEnd: i + 1,
      positionType,
    });
  }
}
