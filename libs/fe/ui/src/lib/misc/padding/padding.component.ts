import { Component, Injector, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { SizeType } from '@english-learning/shared-type';
import { ComponentDirective } from '@english-learning/fe-system';

@Component({
  selector: 'lib-padding',
  standalone: true,
  imports: [NgClass],
  templateUrl: './padding.component.html',
  styleUrl: './padding.component.scss',
})
/**
 * Padding Component
 */
export class PaddingComponent extends ComponentDirective {
  @Input() padding: SizeType = 'none';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'padding');
  }

  protected override afterInit() {
    this.addClassName(this.padding);
  }
}
