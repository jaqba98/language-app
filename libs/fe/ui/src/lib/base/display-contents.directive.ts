import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[libDisplayContents]',
  standalone: true,
})
/**
 * Display Contents Directive
 */
export class DisplayContentsDirective {
  @HostBinding('style.display') display = 'contents';
}
