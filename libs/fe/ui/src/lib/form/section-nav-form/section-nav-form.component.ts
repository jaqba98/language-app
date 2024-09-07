import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import {
  SectionTabModel,
  StoreModel,
} from '@english-learning/fe-store';
import { BaseFormComponent } from '../base-form/base-form.component';
import { BaseFormModel } from '../../model/form/base-form.model';
import { ControlLinkModel } from '../../model/control/control-link.model';
import { ControlKindEnum } from '../../enum/control-kind.enum';

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
    this.sub = this.store
      .select(this.storeName)
      .subscribe(section => {
        this.form = section.tabs
          .map(tab => this.convertTabToLink(tab))
          .reduce(
            (acc: BaseFormModel, curr: ControlLinkModel) => {
              acc.controls.push(curr);
              return acc;
            },
            { controls: [] },
          );
      });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  private convertTabToLink(tab: SectionTabModel): ControlLinkModel {
    return {
      kind: ControlKindEnum.link,
      id: tab.id,
      alignItems: 'flex-start',
      label: tab.label,
      path: tab.path,
      tip: '',
      validation: {
        validators: [],
        isVisible: true,
      },
    };
  }
}
