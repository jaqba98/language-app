import { Component } from '@angular/core';
import { Properties } from 'csstype';
import { Store } from '@ngrx/store';

import {
  BreakpointEnum, BreakpointModel, BreakpointService, ObserverModel,
} from '@english-learning/fe-system';
import { SectionStoreModel } from '@english-learning/fe-store';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum, ControlType } from '../base-form/base-form.model';

@Component({
  selector: 'lib-section-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './section-nav-form.component.html',
})
export class SectionNavFormComponent implements ObserverModel<BreakpointModel> {
  direction: Properties['flexDirection'] = 'row';

  form: BaseFormModel = {
    controls: [],
  };

  constructor(
    private readonly breakpoint: BreakpointService,
    private store: Store<{ grammar: SectionStoreModel }>,
  ) {
    this.breakpoint.addObserver(this);
    this.store.select('grammar').subscribe((data) => {
      this.form.controls = [];
      data.tabs
        .map((tab): ControlType => ({
          kind: ControlKindEnum.buttonText,
          name: tab.label,
          label: tab.label,
          isPrimary: false,
          fullWidth: true,
        }))
        .forEach((tab) => this.form.controls.push(tab));
    });
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.direction = 'column';
    } else {
      this.direction = 'row';
    }
  }
}
