import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { CardComponent } from '../../misc/card/card.component';
import { ButtonIconComponent } from '../../control/button-icon/button-icon.component';
import { ButtonTextComponent } from '../../control/button-text/button-text.component';
import { PositionComponent } from '../../misc/position/position.component';
import { MainNavOptionsType } from './main-nav.model';
import { TextComponent } from "../../misc/text/text.component";
import { FlexComponent } from '../../misc/flex/flex.component';

@Component({
  selector: 'lib-main-nav',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    CardComponent,
    ButtonIconComponent,
    ButtonTextComponent,
    PositionComponent,
    TextComponent,
    FlexComponent
],
  templateUrl: './main-nav.component.html'
})
export class MainNavComponent {
  @ViewChild('hamburger') hamburger!: ButtonIconComponent;
  @ViewChild('menuCard') menuCard!: CardComponent;

  @Input({ required: true }) options!: MainNavOptionsType;

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
