import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapMarkerComponent } from '../roadmap-marker/roadmap-marker.component';
import { RoadmapMarkerViewModel, RoadmapModel } from './roadmap.model';
import { GridComponent } from '../../layout/grid/grid.component';
import { GridItemComponent } from '../../layout/grid-item/grid-item.component';

@Component({
  selector: 'lib-roadmap',
  standalone: true,
  imports: [CommonModule, GridComponent, GridItemComponent, RoadmapMarkerComponent],
  templateUrl: './roadmap.component.html',
})
export class RoadmapComponent implements OnInit {
  @Input() model: RoadmapModel = {
    markers: [],
  };

  markersView: RoadmapMarkerViewModel[] = [];

  ngOnInit() {
    let direction: 'left' | 'right' = 'left';
    let position = 6;
    const size = 2;

    for (let i = 0; i < this.model.markers.length; i += 1) {
      this.buildMarkerView(i, position, size);
      if (direction === 'left') {
        position -= size;
      } else {
        position += size;
      }
      if (position >= 12 - size) {
        direction = 'left';
      } else if (position <= size) {
        direction = 'right';
      }
    }
  }

  private buildMarkerView(i: number, position: number, size: number) {
    this.markersView.push({
      ...this.model.markers[i],
      colStart: position,
      colEnd: position + size,
      rowStart: i,
      rowEnd: i + 1,
    });
  }
}
