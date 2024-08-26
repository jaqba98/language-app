import {
  Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { IconComponent } from '../../misc/icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonOutputModel } from '../button/button-output.model';

@Component({
  selector: 'lib-button-icon',
  standalone: true,
  imports: [
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './button-icon.component.html',
})
export class ButtonIconComponent implements OnInit {
  @Input({ required: true }) control!: FormControl;

  @Input({ required: true }) iconEnter!: string;

  @Input({ required: true }) iconLeave!: string;

  @Input({ required: true }) alt!: string;

  @Input() isPrimary = false;

  @Output() clickEvent = new EventEmitter();

  icon!: string;

  ngOnInit() {
    this.icon = this.iconLeave;
  }

  onClickEvent(output: ButtonOutputModel) {
    this.icon = output.isFocused ? this.iconEnter : this.iconLeave;
    this.clickEvent.emit();
  }
}
