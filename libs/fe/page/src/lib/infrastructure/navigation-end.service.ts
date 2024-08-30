import { NavigationEnd, Router } from '@angular/router';
import {
  filter, switchMap, combineLatest, of,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { StoreModel } from '@english-learning/fe-store';
import { RouteNavigationService } from '@english-learning/fe-ui';

@Injectable({ providedIn: 'root' })
export class NavigationEndService {
  constructor(
    private readonly store: Store<StoreModel>,
    private readonly routeNavigation: RouteNavigationService,
    private readonly router: Router,
  ) {}

  getEvent(storeName: keyof StoreModel) {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      switchMap((params) => combineLatest([
        of(params.url),
        this.store.select(storeName),
      ])),
      switchMap(([url, data]) => {
        const tab = data.tabs.find((currTab) => currTab.path === url);
        if (tab) return of(tab);
        const defaultTab = data.tabs.find((currTab) => currTab.id === data.defaultTabId);
        if (!defaultTab) throw new Error(`Not found path to the default tab: ${data.defaultTabId}`);
        this.routeNavigation.navigate(defaultTab.path);
        return of(undefined);
      }),
    );
  }
}
