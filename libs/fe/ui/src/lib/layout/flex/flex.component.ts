import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import {
  DirectionType,
  PositionType,
  SizeType,
  SpaceType,
} from '@english-learning/shared-type';
import { ComponentDirective } from '../../base/component.directive';

@Component({
  selector: 'lib-flex',
  standalone: true,
  imports: [NgClass],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.scss',
})
/**
 * Flex Component
 */
export class FlexComponent extends ComponentDirective {
  @Input() flexDirection: DirectionType = 'column';

  @Input() alignItems: PositionType = 'left';

  @Input() justifyContent: PositionType = 'left';

  @Input() space: SpaceType = 'none';

  @Input() gap: SizeType = 'none';

  protected override afterInit() {
    this.addClassName('flex');
    this.addClassName('flex', 'flex-direction', this.flexDirection);
    this.addClassName('flex', 'align-items', this.alignItems);
    if (this.space === 'none') {
      this.addClassName('flex', 'justify-content', this.justifyContent);
    } else {
      this.addClassName('flex', 'justify-content', this.space);
    }
    this.addClassName('flex', 'gap', this.gap);
  }
}
