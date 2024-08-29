import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { Properties } from 'csstype';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import {
  BreakpointEnum, BreakpointModel, BreakpointService, ObserverModel,
} from '@english-learning/fe-system';
import { StoreModel } from '@english-learning/fe-store';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum, ControlType } from '../base-form/base-form.model';

@Component({
  selector: 'lib-section-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './section-nav-form.component.html',
})
export class SectionNavFormComponent implements ObserverModel<BreakpointModel>, OnInit, OnDestroy {
  @Input({ required: true }) storeName!: keyof StoreModel;

  direction: Properties['flexDirection'] = 'row';

  form: BaseFormModel = {
    controls: [],
  };

  private sub!: Subscription;

  constructor(
    private readonly breakpoint: BreakpointService,
    private store: Store<StoreModel>,
  ) {
    this.breakpoint.addObserver(this);
  }

  update(data: BreakpointModel) {
    if (data.breakpoint === BreakpointEnum.XSmall) {
      this.direction = 'column';
    } else {
      this.direction = 'row';
    }
  }

  ngOnInit() {
    this.sub = this.store.select(this.storeName).subscribe((section) => {
      this.form = section.tabs
        .map((tab): ControlType => ({
          kind: ControlKindEnum.buttonText,
          name: tab.label,
          label: tab.label,
          isPrimary: false,
          fullWidth: true,
        }))
        .reduce((acc: BaseFormModel, curr: ControlType) => {
          acc.controls.push(curr);
          return acc;
        }, { controls: [] });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
