import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '../../../misc/icon/icon.component';
import { RoadmapMarkerType } from './roadmap-marker.type';

@Component({
  selector: 'lib-roadmap-marker',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './roadmap-marker.component.html',
  styleUrl: './roadmap-marker.component.scss',
})
export class RoadmapMarkerComponent {
  @Input() type: RoadmapMarkerType = 'blocked';

  getClasses() {
    const roadmapMarkerType = `roadmap-marker__${this.type}`;
    return {
      [roadmapMarkerType]: true,
    };
  }
}
