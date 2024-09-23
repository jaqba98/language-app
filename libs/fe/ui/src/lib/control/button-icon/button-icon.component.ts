import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IconComponent } from '../../misc/icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { ControlButtonIconModel } from '../../model/control/control-button-icon.model';

@Component({
  selector: 'lib-button-icon',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './button-icon.component.html',
})
export class ButtonIconComponent implements OnInit {
  @Input({ required: true }) form!: FormControl;

  @Input({ required: true }) control!: ControlButtonIconModel;

  @Output() clickEvent = new EventEmitter();

  icon!: string;

  ngOnInit() {
    this.icon = this.control.icon;
  }

  onClickEvent() {
    this.clickEvent.emit();
  }

  onMouseEnterEvent() {
    this.icon = this.control.icon;
  }

  onMouseLeaveEvent() {
    this.icon = this.control.icon;
  }
}
