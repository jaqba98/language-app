import { Component, Injector, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FontAwesomeColorType, FontAwesomeKindType } from './font-awesome.type';

@Component({
  selector: 'lib-font-awesome',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './font-awesome.component.html',
  styleUrl: './font-awesome.component.scss',
})
export class FontAwesomeComponent extends ComponentDirective {
  @Input() kind: FontAwesomeKindType = 'lock';

  @Input() color: FontAwesomeColorType = 'default';

  @Input() size: SizeProp = '1x';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'font-awesome');
  }

  protected override afterInit() {
    this.addClassName(this.color);
  }

  getFontAwesomeIcon(): IconProp {
    switch (this.kind) {
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
        throw new Error(notValueInType(this.kind));
    }
  }
}
