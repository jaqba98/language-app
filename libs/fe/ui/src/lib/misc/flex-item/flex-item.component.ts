import { CommonModule } from '@angular/common';
import {
  Component, HostBinding, Input, OnInit,
} from '@angular/core';
import { Properties } from 'csstype';

@Component({
  selector: 'lib-flex-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flex-item.component.html',
})
export class FlexItemComponent implements OnInit {
  @HostBinding('style.flex') hostFlex: Properties['flex'];

  @Input() flex: Properties['flex'];

  ngOnInit(): void {
    this.hostFlex = this.flex;
  }
}
