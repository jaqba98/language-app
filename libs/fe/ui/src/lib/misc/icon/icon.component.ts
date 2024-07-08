import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input({ required: true }) src!: string;

  @Input({ required: true }) alt!: string;
}
