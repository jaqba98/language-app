import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input({ required: true }) src!: string;

  @Input({ required: true }) alt!: string;
}
