// TODO: I am here
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { RoadmapMarkerType } from './roadmap-marker.type';
import { FontAwesomeComponent } from '../../infrastructure/font-awesome/font-awesome.component';
import {
  FontAwesomeColorType,
  FontAwesomeType,
} from '../../infrastructure/font-awesome/font-awesome.type';
import { ComponentDirective } from '../../base/component.directive';

@Component({
  selector: 'lib-roadmap-marker',
  standalone: true,
  imports: [CommonModule, FontAwesomeComponent],
  templateUrl: './roadmap-marker.component.html',
  styleUrl: './roadmap-marker.component.scss',
})
export class RoadmapMarkerComponent extends ComponentDirective {
  @Input() type: RoadmapMarkerType = 'blocked';

  @Input() fontAwesomeType: FontAwesomeType = 'lock';

  fontAwesomeColorType: FontAwesomeColorType = 'gray';

  element = '';

  override onAfterInit() {
    this.addClassToComponent('roadmap-marker', this.type);
    this.fontAwesomeColorType = this.convertRoadmapMarkerType();
  }

  private convertRoadmapMarkerType(): FontAwesomeColorType {
    switch (this.type) {
      case 'blocked':
        return 'gray';
      case 'active':
        return 'green';
      case 'done':
        return 'gold';
      default:
        throw new Error('Not supported color type!');
    }
  }
}
