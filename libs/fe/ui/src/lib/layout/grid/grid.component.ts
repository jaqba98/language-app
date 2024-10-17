import { NgClass } from '@angular/common';
import { Component, Injector, Input } from '@angular/core';

import { ComponentDirective } from '@english-learning/fe-system';
import { GridGapType } from './grid.type';

@Component({
  selector: 'lib-grid',
  standalone: true,
  imports: [NgClass],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent extends ComponentDirective {
  @Input() gapType: GridGapType = 'none';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'grid');
  }

  protected override afterInit() {
    this.addClassName(this.gapType);
  }
}
