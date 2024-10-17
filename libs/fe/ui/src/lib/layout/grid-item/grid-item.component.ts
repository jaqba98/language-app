import { CommonModule } from '@angular/common';
import { Component, Injector, Input } from '@angular/core';
import { Properties } from 'csstype';

import { ComponentDirective } from '@english-learning/fe-system';
import { GridItemPositionType } from './grid-item.type';

@Component({
  selector: 'lib-grid-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.scss',
})
export class GridItemComponent extends ComponentDirective {
  @Input() columnStart: Properties['gridColumnStart'] = 1;

  @Input() columnEnd: Properties['gridColumnEnd'] = 13;

  @Input() rowStart: Properties['gridRowStart'] = 0;

  @Input() rowEnd: Properties['gridRowEnd'] = 1;

  @Input() positionType: GridItemPositionType = 'left';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'grid-item');
  }

  protected override afterInit() {
    this.addClassName(this.positionType);
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
