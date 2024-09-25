import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Properties } from 'csstype';

import { BemService } from '../../service/bem.service';
import { GridItemPositionType } from './grid-item.type';

@Component({
  selector: 'lib-grid-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss',
})
export class GridItemComponent implements OnInit {
  @Input() columnStart: Properties['gridColumnStart'] = 1;

  @Input() columnEnd: Properties['gridColumnEnd'] = 13;

  @Input() rowStart: Properties['gridRowStart'] = 0;

  @Input() rowEnd: Properties['gridRowEnd'] = 1;

  @Input() positionType: GridItemPositionType = 'left';

  element = '';

  constructor(private readonly bem: BemService) {}

  ngOnInit() {
    this.element = this.bem.buildBem('grid-item', this.positionType);
  }

  buildGridItemStyles(): Properties {
    return {
      gridColumnStart: this.columnStart,
      gridColumnEnd: this.columnEnd,
      gridRowStart: this.rowStart,
      gridRowEnd: this.rowEnd,
    };
  }
}
