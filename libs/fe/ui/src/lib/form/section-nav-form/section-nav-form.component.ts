import { Component } from '@angular/core';
import { Properties } from 'csstype';

import {
  BreakpointEnum, BreakpointModel, BreakpointService, ObserverModel,
} from '@english-learning/fe-system';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum } from '../base-form/base-form.model';

@Component({
  selector: 'lib-section-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './section-nav-form.component.html',
})
export class SectionNavFormComponent implements ObserverModel<BreakpointModel> {
  direction: Properties['flexDirection'] = 'row';

  constructor(private readonly breakpoint: BreakpointService) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.direction = 'column';
    } else {
      this.direction = 'row';
    }
  }

  form: BaseFormModel = {
    controls: [
      {
        kind: ControlKindEnum.buttonText,
        name: 'link1',
        label: 'Link1',
        isPrimary: false,
        fullWidth: true,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'link2',
        label: 'Link2',
        isPrimary: false,
        fullWidth: true,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'link3',
        label: 'Link3',
        isPrimary: false,
        fullWidth: true,
      },
      {
        kind: ControlKindEnum.buttonText,
        name: 'link4',
        label: 'Link4',
        isPrimary: false,
        fullWidth: true,
      },
    ],
  };
}
