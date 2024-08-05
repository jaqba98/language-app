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
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  @ViewChild('self') self!: ElementRef;

  @Input() maxWidth: Properties['maxWidth'] = 'auto';
}
