import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { Properties } from 'csstype';

@Component({
  selector: 'lib-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {
  @ViewChild('self') self!: ElementRef;

  @Input() width: Properties['width'];

  @Input() height: Properties['height'];

  buildWrapperStyles(): Properties {
    return {
      width: this.width,
      height: this.height,
    };
  }
}
