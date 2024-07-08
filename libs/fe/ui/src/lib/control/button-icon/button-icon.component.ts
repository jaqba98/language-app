import { Component, Input } from '@angular/core';

import { IconComponent } from '../../misc/icon/icon.component';

@Component({
  selector: 'lib-button-icon',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss'
})
export class ButtonIconComponent {
  @Input({ required: true }) src!: string;

  @Input({ required: true }) alt!: string;
}
