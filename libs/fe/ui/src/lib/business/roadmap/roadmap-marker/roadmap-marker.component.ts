import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { RoadmapMarkerType } from './roadmap-marker.type';
import { BemService } from '../../../service/bem.service';
import { FontAwesomeComponent } from '../../../infrastructure/font-awesome/font-awesome.component';
import {
  FontAwesomeColorType,
  FontAwesomeType,
} from '../../../infrastructure/font-awesome/font-awesome.type';

@Component({
  selector: 'lib-roadmap-marker',
  standalone: true,
  imports: [NgClass, FontAwesomeComponent],
  templateUrl: './roadmap-marker.component.html',
  styleUrl: './roadmap-marker.component.scss',
})
export class RoadmapMarkerComponent implements OnInit {
  @Input() type: RoadmapMarkerType = 'blocked';

  @Input() fontAwesomeType: FontAwesomeType = 'lock';

  element = '';

  fontAwesomeColorType: FontAwesomeColorType = 'gray';

  constructor(private readonly bem: BemService) {}

  ngOnInit() {
    this.element = this.bem.buildBem('roadmap-marker', this.type);
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
