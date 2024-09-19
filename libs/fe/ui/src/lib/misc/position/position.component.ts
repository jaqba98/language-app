// todo: refactor it
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Properties } from 'csstype';

@Component({
  selector: 'lib-position',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './position.component.html',
})
export class PositionComponent {
  @Input() position: Properties['position'] = 'static';

  @Input() top: Properties['top'] = 'auto';

  @Input() right: Properties['right'] = 'auto';

  @Input() bottom: Properties['bottom'] = 'auto';

  @Input() left: Properties['left'] = 'auto';

  buildPosition(): Properties {
    return {
      position: this.position,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left,
    };
  }
}
