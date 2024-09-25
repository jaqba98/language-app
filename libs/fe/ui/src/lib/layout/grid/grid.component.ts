import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { GridGapType } from './grid.type';
import { BemService } from '../../service/bem.service';

@Component({
  selector: 'lib-grid',
  standalone: true,
  imports: [NgClass],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  @Input() gapType: GridGapType = 'none';

  element = '';

  constructor(private readonly bem: BemService) {}

  ngOnInit() {
    this.element = this.bem.buildBem('grid', this.gapType);
  }
}
