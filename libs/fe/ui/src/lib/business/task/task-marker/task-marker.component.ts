import { Component, Input } from '@angular/core';

import { ComponentDirective } from '../../../base/component.directive';
import { FontAwesomeComponent } from '../../../infrastructure/font-awesome/font-awesome.component';
import {
  FontAwesomeType,
  FontAwesomeColorType,
} from '../../../infrastructure/font-awesome/font-awesome.type';

@Component({
  selector: 'lib-roadmap-marker',
  standalone: true,
  imports: [...ComponentDirective.buildImports(), FontAwesomeComponent],
  templateUrl: './task-marker.component.html',
  styleUrl: './task-marker.component.scss',
})
export class RoadmapMarkerComponent extends ComponentDirective<boolean> {
  @Input() markerType = 'blocked';

  fontAwesomeType: FontAwesomeType = 'lock';

  fontAwesomeColorType: FontAwesomeColorType = 'gray';

  protected override onAfterInit() {
    this.addClassToComponent('roadmap-marker', this.markerType);
    this.getRoadmapMarkerIcon();
  }

  protected override onClick() {
    this.event.emit(true);
  }

  private getRoadmapMarkerIcon() {
    switch (this.markerType) {
      case 'blocked':
        this.setFontAwesome('lock', 'gray');
        break;
      case 'active':
        this.setFontAwesome('play', 'green');
        break;
      case 'done':
        this.setFontAwesome('star', 'gold');
        break;
      default:
        throw new Error('Not supported marker type!');
    }
  }

  private setFontAwesome(type: FontAwesomeType, colorType: FontAwesomeColorType) {
    this.fontAwesomeType = type;
    this.fontAwesomeColorType = colorType;
  }
}
