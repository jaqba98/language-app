import { Component, Input } from '@angular/core';

import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { ControlKindEnum } from '../../enum/control-kind.enum';
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
        kind: ControlKindEnum.buttonIcon,
        id: 'submit',
        alignItems: 'stretch',
        validation: {
          validators: [],
          isVisible: false,
        },
        icon: 'bars',
        color: 'default',
        type: 'button',
        fullWidth: false,
      },
    },
  };

  protected override afterChanges() {
    this.form.controls.submit.icon = this.menuIsOpen ? 'xmark' : 'bars';
  }

  onEvent() {
    this.emit(true);
  }
}
