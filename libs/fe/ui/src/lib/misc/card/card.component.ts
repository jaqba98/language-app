import { Component } from '@angular/core';

@Component({
  selector: 'lib-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}

// import { Component, Input } from '@angular/core';
// import { Properties } from 'csstype';
// import { NgClass } from '@angular/common';
// import { CardType } from './card.type';
// @Component({
//   selector: 'lib-card',
//   standalone: true,
//   imports: [NgClass],
//   templateUrl: './card.component.html',
//   styleUrl: './card.component.scss',
// })
// export class CardComponent {
//   @Input() width: Properties['width'];
//   @Input() type: CardType = 'default';
//   getCardType() {
//     switch (this.type) {
//       case 'default':
//         return 'card--default';
//       case 'main-nav':
//         return 'card--main-nav';
//       case 'main-nav-options':
//         return 'card--main-nav-options';
//       default:
//         throw new Error('Not supported card type!');
//     }
//   }
// }
