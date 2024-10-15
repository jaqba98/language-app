import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Properties } from 'csstype';

import {
  DirectionType,
  PositionType,
  SizeType,
  SpaceType,
} from '@english-learning/shared-type';
import { ComponentDirective } from '../../base/component.directive';
import { DisplayContentsDirective } from '../../base/display-contents.directive';

@Component({
  selector: 'lib-flex',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.scss',
  hostDirectives: [DisplayContentsDirective],
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

  @Input() minHeight100svh = false;

  protected override afterInit() {
    this.addClassName('flex', 'align-items', this.alignItems);
    const justifyContent = this.space === 'none' ? this.justifyContent : this.space;
    this.addClassName('flex', 'justify-content', justifyContent);
    this.addClassName('flex', 'gap', this.gap);
  }

  getStyles(): Properties {
    return {
      flexDirection: this.flexDirection,
      minHeight: this.buildStyle(this.minHeight100svh, '100svh'),
    };
  }
}
