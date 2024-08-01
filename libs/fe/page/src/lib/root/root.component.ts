import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainNavComponent } from '@english-learning/fe-ui';
import { FlexComponent } from "../../../../ui/src/lib/misc/flex/flex.component";

@Component({
  selector: 'lib-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainNavComponent,
    FlexComponent
],
  templateUrl: './root.component.html',
})
export class RootComponent {}
