import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'lib-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @ViewChild('self') self!: ElementRef;
}
