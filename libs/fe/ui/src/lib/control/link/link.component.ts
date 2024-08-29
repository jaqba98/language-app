import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TextComponent } from '../../misc/text/text.component';

@Component({
  selector: 'lib-link',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input({ required: true }) control!: FormControl;

  @Input({ required: true }) label!: string;

  onClickEvent() {
    this.control.setValue(true);
  }
}
