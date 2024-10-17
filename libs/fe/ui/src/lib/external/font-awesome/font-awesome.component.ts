import { Component, Injector, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { FontAwesomeModule, SizeProp } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/angular-fontawesome/types';
import {
  faBars,
  faLock,
  faPlay,
  faSchool,
  faStar,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { ComponentDirective } from '@english-learning/fe-system';
import { notValueInType } from '@english-learning/fe-domain';
import { FontAwesomeColorType, FontAwesomeType } from './font-awesome.type';

@Component({
  selector: 'lib-font-awesome',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './font-awesome.component.html',
  styleUrl: './font-awesome.component.scss',
})
/**
 * Font Awesome Component
 */
export class FontAwesomeComponent extends ComponentDirective {
  @Input() type: FontAwesomeType = 'lock';

  @Input() color: FontAwesomeColorType = 'default';

  @Input() size: SizeProp = '1x';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'font-awesome');
  }

  protected override afterInit() {
    this.addClassName(this.color);
  }

  getFontAwesomeIcon(): IconProp {
    switch (this.type) {
      case 'school':
        return faSchool;
      case 'lock':
        return faLock;
      case 'play':
        return faPlay;
      case 'star':
        return faStar;
      case 'bars':
        return faBars;
      case 'xmark':
        return faXmark;
      default:
        throw new Error(notValueInType(this.type, 'FontAwesomeType'));
    }
  }
}
