import { Component, ViewChild, ElementRef, Input } from "@angular/core";
import { Properties } from "csstype";

@Component({
  selector: 'lib-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @ViewChild('self') self!: ElementRef;

  @Input() height: Properties['height'] = 'auto';

  @Input() isDarken = false;
}
