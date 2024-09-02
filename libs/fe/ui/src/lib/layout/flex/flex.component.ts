import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Properties } from 'csstype';

@Component({
  selector: 'lib-flex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.scss',
})
export class FlexComponent {
  @Input() flexDirection: Properties['flexDirection'];

  @Input() alignItems: Properties['alignItems'];

  @Input() justifyContent: Properties['justifyContent'];

  @Input() gap: Properties['gap'];

  @Input() minHeight: Properties['minHeight'];

  buildFlexStyles(): Properties {
    return {
      flexDirection: this.flexDirection,
      alignItems: this.alignItems,
      justifyContent: this.justifyContent,
      gap: this.gap,
      minHeight: this.minHeight,
    };
  }
}
