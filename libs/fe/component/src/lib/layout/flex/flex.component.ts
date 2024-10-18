import { CommonModule } from '@angular/common';
import { Component, Injector, Input } from '@angular/core';
import { Properties } from 'csstype';

import { TextUtils } from '@english-learning/shared-utils';
import { ComponentDirective } from '@english-learning/fe-system';
import { SizeType } from '@english-learning/shared-type';
import {
  FlexAlignitemsType,
  FlexDirectionType,
  FlexJustifyContentType,
} from './flex.type';

@Component({
  selector: 'lib-flex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.scss',
})
export class FlexComponent extends ComponentDirective {
  @Input() flexDirection: FlexDirectionType = 'column';

  @Input() alignItems: FlexAlignitemsType = 'flexStart';

  @Input() justifyContent: FlexJustifyContentType = 'flexStart';

  @Input() gap: SizeType = 'none';

  @Input() minHeight100svh = false;

  constructor(
    protected override readonly injector: Injector,
    private readonly text: TextUtils,
  ) {
    super(injector, 'flex');
  }

  protected override afterInit() {
    this.addClassName('gap', this.gap);
  }

  getStyles(): Properties {
    return {
      flexDirection: this.flexDirection,
      alignItems: this.text.camelToSnakeCase(this.alignItems),
      justifyContent: this.text.camelToSnakeCase(this.justifyContent),
      minHeight: this.assignStyle(this.minHeight100svh, '100svh'),
    };
  }
}
