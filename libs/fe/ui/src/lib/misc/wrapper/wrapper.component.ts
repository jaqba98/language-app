import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'lib-wrapper',
  standalone: true,
  templateUrl: './wrapper.component.html'
})
export class WrapperComponent {
  @ViewChild('self') self!: ElementRef;
}
