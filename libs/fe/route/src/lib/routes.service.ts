import { Route } from "@angular/router";

import {
  HomeComponent,
  GrammarComponent,
  PresentSimpleComponent
} from "@english-learning/fe-page";

export const routes: Route[] = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "grammar",
    component: GrammarComponent
  },
  {
    path: "present-simple",
    component: PresentSimpleComponent
  }
];
