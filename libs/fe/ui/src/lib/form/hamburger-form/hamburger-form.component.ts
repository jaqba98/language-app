import { Component, Injector, Input } from '@angular/core';

import { ControlEnum } from '@english-learning/fe-component';
import { EventEmitterDirective } from '@english-learning/fe-system';
import { BaseFormModel } from '../../model/form/base-form.model';
import { BaseFormComponent } from '../base-form/base-form.component';
import { HamburgerFormModel } from './hamburger-form.model';

@Component({
  selector: 'lib-hamburger-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './hamburger-form.component.html',
})
/**
 * Hamburger Form Component
 */
export class HamburgerFormComponent extends EventEmitterDirective<boolean> {
  @Input() menuIsOpen = true;

  form: BaseFormModel<HamburgerFormModel> = {
    controls: {
      submit: {
        kind: ControlEnum.buttonIcon,
        id: 'submit',
        alignItems: 'flexStart',
        validation: {
          validators: [],
          isVisible: false,
        },
        icon: 'bars',
        color: 'default',
        type: 'button',
      },
    },
  };

  constructor(protected override readonly injector: Injector) {
    super(injector, 'hamburger-form');
  }

  protected override afterChanges() {
    this.form.controls.submit.icon = this.menuIsOpen ? 'xmark' : 'bars';
  }

  onEvent() {
    this.emit(true);
  }
}
