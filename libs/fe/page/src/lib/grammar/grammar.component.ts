import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ActivatedRoute, NavigationEnd, ParamMap, Router,
} from '@angular/router';
import {
  combineLatest, concatMap, filter, of, Subscription,
} from 'rxjs';

import { SectionStoreModel, SectionTabModel, StoreModel } from '@english-learning/fe-store';
import {
  CardComponent, RouteNavigationService, SectionComponent,
  SectionNavFormComponent, TextComponent,
} from '@english-learning/fe-ui';

@Component({
  selector: 'lib-grammar',
  standalone: true,
  imports: [
    SectionComponent,
    SectionNavFormComponent,
    CardComponent,
    TextComponent,
  ],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent implements OnDestroy {
  title = '';

  private sub: Subscription;

  constructor(
    private readonly store: Store<StoreModel>,
    private readonly routeNavigation: RouteNavigationService,
    private readonly route: ActivatedRoute,
    private router: Router,
  ) {
    this.sub = this.getEventNavigationEnd().subscribe(() => {
      this.getRouteParamMap()
        .subscribe(([params, grammar]) => this.navigate(params, grammar))
        .unsubscribe();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getEventNavigationEnd() {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
    );
  }

  private getRouteParamMap() {
    return this.route.paramMap.pipe(
      concatMap((params) => combineLatest([
        of(params), this.store.select('grammar'),
      ])),
    );
  }

  private navigate(params: ParamMap, grammar: SectionStoreModel) {
    const tabId = params.get('tabId');
    if (tabId) {
      this.navigateToTab(tabId, grammar);
      return;
    }
    this.navigateToDefaultTab(grammar);
  }

  private navigateToTab(tabId: string, grammar: SectionStoreModel) {
    const tab = grammar.tabs.find((currTab) => currTab.id === tabId);
    if (tab) {
      this.displayContent(tab);
      return;
    }
    this.navigateToDefaultTab(grammar);
  }

  private navigateToDefaultTab(grammar: SectionStoreModel) {
    const tab = grammar.tabs.find((currTab) => currTab.id === grammar.defaultTabId);
    if (!tab) throw new Error(`Not found path to the default tab: ${grammar.defaultTabId}`);
    this.routeNavigation.navigate(tab.path);
  }

  private displayContent(tab: SectionTabModel) {
    this.title = tab.content;
  }
}
