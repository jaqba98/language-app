import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-position',
  standalone: true,
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss'
})
export class PositionComponent {
  @Input() position = 'static';

  @Input() top = "auto";

  @Input() right = "auto";

  @Input() bottom = "auto";

  @Input() left = "auto";
}
