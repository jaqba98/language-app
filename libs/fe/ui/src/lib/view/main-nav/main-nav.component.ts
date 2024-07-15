import { Component, HostListener, ViewChild } from '@angular/core';

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

  @ViewChild('menuCard') menuCard!: CardComponent;

  menuVisible = false;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.hamburger && this.hamburger.button.button.nativeElement.contains(event.target)) {
      this.menuVisible = !this.menuVisible;
      return;
    }
    if (this.menuCard && this.menuCard.card.nativeElement.contains(event.target)) {
      this.menuVisible = true;
      return;
    }
    this.menuVisible = false;
  }
}
