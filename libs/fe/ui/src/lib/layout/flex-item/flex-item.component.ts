import { Component, Input } from '@angular/core';
import { Properties } from 'csstype';

@Component({
  selector: 'lib-flex-item',
  standalone: true,
  templateUrl: './flex-item.component.html',
  styleUrl: './flex-item.component.scss',
})
export class FlexItemComponent {
  @Input() flex: Properties['flex'] = '0';
}
