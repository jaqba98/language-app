import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { SectionTabModel, StoreModel } from '@english-learning/fe-store';
import { BaseFormComponent } from '../base-form/base-form.component';
import {
  BaseFormModel, ControlKindEnum, ControlLinkModel,
} from '../base-form/base-form.model';

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

  constructor(private readonly store: Store<StoreModel>) {}

  ngOnInit() {
    this.sub = this.store.select(this.storeName)
      .subscribe((section) => {
        this.form = section.tabs
          .map((tab) => this.convertTabToLink(tab))
          .reduce((acc: BaseFormModel, curr: ControlLinkModel) => {
            acc.controls.push(curr);
            return acc;
          }, { controls: [] });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private convertTabToLink(tab: SectionTabModel): ControlLinkModel {
    return {
      kind: ControlKindEnum.link,
      name: tab.id,
      label: tab.label,
      path: tab.path,
    };
  }
}
