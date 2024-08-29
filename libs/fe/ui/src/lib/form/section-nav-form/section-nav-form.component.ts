import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { StoreModel } from '@english-learning/fe-store';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel, ControlKindEnum, ControlType } from '../base-form/base-form.model';
import { SectionNavFormModel } from './section-nav-form.model';
import { RouteNavigationService } from '../../infrastructure/route-navigation.service';

@Component({
  selector: 'lib-section-nav-form',
  standalone: true,
  imports: [BaseFormComponent],
  templateUrl: './section-nav-form.component.html',
})
export class SectionNavFormComponent implements OnInit, OnDestroy {
  @Input({ required: true }) storeName!: keyof StoreModel;

  form: BaseFormModel = {
    controls: [],
  };

  private sub!: Subscription;

  constructor(
    private readonly store: Store<StoreModel>,
    private readonly route: RouteNavigationService,
  ) {}

  ngOnInit() {
    this.sub = this.store.select(this.storeName).subscribe((section) => {
      this.form = section.tabs
        .map((tab): ControlType => ({
          kind: ControlKindEnum.link,
          name: tab.name,
          label: tab.label,
          path: tab.path,
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

  onEvent(model: SectionNavFormModel) {
    const kind = Object.keys(model).find((key) => model[key]);
    const path = this.form.controls
      .filter((control) => control.kind === ControlKindEnum.link)
      .find((control) => control.name === kind)?.path;
    if (!path) throw new Error('Path not exist!');
    this.route.navigate(path);
  }
}
