import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainNavComponent, MainNavOptionsType } from '@english-learning/fe-ui';

@Component({
  selector: 'lib-fe-main',
  standalone: true,
  imports: [
    MainNavComponent,
    RouterOutlet
  ],
  templateUrl: './fe-main.component.html'
})
export class FeMainComponent {
  options: MainNavOptionsType = [
    { value: 'Link 1', link: 'link1' },
    { value: 'Link 2', link: 'link2' },
    { value: 'Link 3', link: 'link3' },
    { value: 'Link 4', link: 'link4' },
    { value: 'Link 5', link: 'link5' }
  ];
}
