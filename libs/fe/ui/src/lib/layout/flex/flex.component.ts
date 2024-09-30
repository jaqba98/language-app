import { Component, Input } from '@angular/core';
import { Properties } from 'csstype';

import { ComponentDirective } from '../../base/component.directive';

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

  @Input() gap: Properties['gap'];

  buildStyles(): Properties {
    return {
      flexDirection: this.flexDirection,
      alignItems: this.alignItems,
      justifyContent: this.justifyContent,
      gap: this.gap,
    };
  }
}
