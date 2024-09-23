import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { FontAwesomeModule, SizeProp } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/angular-fontawesome/types';
import { faEdit, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeType } from './font-awesome.type';

@Component({
  selector: 'lib-font-awesome',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './font-awesome.component.html',
})
export class FontAwesomeComponent {
  @Input() type: FontAwesomeType = 'lock';

  @Input() size: SizeProp = '1x';

  @Input() className = '';

  getIcon(): IconProp {
    switch (this.type) {
      case 'lock':
        return faLock;
      case 'edit':
        return faEdit;
      default:
        throw new Error('Not supported font awesome type!');
    }
  }
}
