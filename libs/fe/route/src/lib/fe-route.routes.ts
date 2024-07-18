import { Route } from '@angular/router';

import { MainNavOptionsType } from "@english-learning/fe-ui";

export const feRouteRoutes: Route[] = [];

export class FeRouteMenuOptionsService {
  getMenuOptions(): MainNavOptionsType {
    return [
      { value: 'Link 1', link: 'link1' },
      { value: 'Link 2', link: 'link2' },
      { value: 'Link 3', link: 'link3' },
      { value: 'Link 4', link: 'link4' },
      { value: 'Link 5', link: 'link5' }
    ];
  }
}
