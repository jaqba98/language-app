import { Component, ViewChild } from '@angular/core';

import { CardComponent } from '../../misc/card/card.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { PositionComponent } from '../../misc/position/position.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-main-nav',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ButtonIconComponent,
    ButtonTextComponent,
    PositionComponent
  ],
  templateUrl: './main-nav.component.html'
})
export class MainNavComponent {
  @ViewChild('hamburger') hamburger!: ButtonIconComponent;

  menuVisible = false;

  onHamburgerClick() {
    this.menuVisible = !this.menuVisible;
  }

  onHamburgerBlur() {
    this.menuVisible = false;
  }

  onMenuClick() {
    this.menuVisible = true;
    this.hamburger.button.setFocus();
  }
}
