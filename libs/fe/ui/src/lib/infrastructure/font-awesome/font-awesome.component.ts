import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule, SizeProp } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/angular-fontawesome/types';
import { faEdit, faLock } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeColorType, FontAwesomeType } from './font-awesome.type';
import { BemService } from '../../service/bem.service';

@Component({
  selector: 'lib-font-awesome',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './font-awesome.component.html',
  styleUrl: './font-awesome.component.scss',
})
export class FontAwesomeComponent implements OnInit {
  @Input() type: FontAwesomeType = 'lock';

  @Input() size: SizeProp = '1x';

  @Input() colorType: FontAwesomeColorType = 'gray';

  className = '';

  constructor(private readonly bem: BemService) {}

  ngOnInit() {
    this.className = this.bem.buildBem('font-awesome', this.colorType);
  }

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
