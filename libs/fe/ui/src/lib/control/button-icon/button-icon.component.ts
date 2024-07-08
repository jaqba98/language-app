import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from '../../misc';

@Component({
  selector: 'lib-button-icon',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss'
})
export class ButtonIconComponent {
  @Input({ required: true }) src!: string;

  @Input({ required: true }) alt!: string;
}
