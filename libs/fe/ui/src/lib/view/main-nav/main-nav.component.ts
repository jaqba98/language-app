import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../../misc';
import { ButtonIconComponent } from '../../control';

@Component({
  selector: 'lib-main-nav',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ButtonIconComponent
  ],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {}
