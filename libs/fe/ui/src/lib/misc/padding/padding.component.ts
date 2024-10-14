import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { SizeType } from '@english-learning/shared-type';
import { ComponentDirective } from '../../base/component.directive';

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

  protected override afterInit() {
    this.addClassName('padding', this.padding);
  }
}
