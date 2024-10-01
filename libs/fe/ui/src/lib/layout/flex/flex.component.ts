import { Component, Input } from '@angular/core';
import { Properties } from 'csstype';

import { ComponentDirective } from '../../base/component.directive';
import { FlexGapType } from './flex.type';

@Component({
  selector: 'lib-flex',
  standalone: true,
  imports: [...ComponentDirective.buildImports()],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.scss',
})
export class FlexComponent extends ComponentDirective<boolean> {
  @Input() flexDirection: Properties['flexDirection'];

  @Input() alignItems: Properties['alignItems'];

  @Input() justifyContent: Properties['justifyContent'];

  @Input() gap: FlexGapType = 'none';

  protected override afterInit() {
    this.addClassName('flex', 'gap', this.gap);
  }

  buildStyles(): Properties {
    return {
      flexDirection: this.flexDirection,
      alignItems: this.alignItems,
      justifyContent: this.justifyContent,
    };
  }
}
