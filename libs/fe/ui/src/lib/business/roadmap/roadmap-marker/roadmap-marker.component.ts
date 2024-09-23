import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { RoadmapMarkerType } from './roadmap-marker.type';
import { BemService } from '../../../service/bem.service';

@Component({
  selector: 'lib-roadmap-marker',
  standalone: true,
  imports: [NgClass],
  templateUrl: './roadmap-marker.component.html',
  styleUrl: './roadmap-marker.component.scss',
})
export class RoadmapMarkerComponent implements OnInit {
  @Input() type: RoadmapMarkerType = 'blocked';

  element = '';

  constructor(private readonly bem: BemService) {}

  ngOnInit() {
    this.element = this.bem.buildBem('roadmap-marker', this.type);
  }
}
