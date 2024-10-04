import { Component, Injector, Input } from '@angular/core';
import { FontAwesomeModule, SizeProp } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/angular-fontawesome/types';
import { faLock, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

import { notSupportedType } from '@english-learning/fe-domain';
import { ComponentDirective } from '../../base/component.directive';
import { FontAwesomeColorType, FontAwesomeType } from './font-awesome.type';

@Component({
  selector: 'lib-font-awesome',
  standalone: true,
  imports: [...ComponentDirective.buildImports(), FontAwesomeModule],
  templateUrl: './font-awesome.component.html',
  styleUrl: './font-awesome.component.scss',
})
export class FontAwesomeComponent extends ComponentDirective {
  @Input() type: FontAwesomeType = 'lock';

  @Input() color: FontAwesomeColorType = 'gray';

  @Input() size: SizeProp = '1x';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  protected override afterInit() {
    this.addClassName('font-awesome', this.color);
  }

  getFontAwesomeIcon(): IconProp {
    switch (this.type) {
      case 'lock':
        return faLock;
      case 'play':
        return faPlay;
      case 'star':
        return faStar;
      default:
        throw new Error(notSupportedType('font awesome'));
    }
  }
}
