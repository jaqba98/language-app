import { CommonModule } from '@angular/common';
import { Component, Input, Injector } from '@angular/core';

import { ComponentDirective } from '@english-learning/fe-system';
import { TextKindType, TextColorType } from './text.type';

@Component({
  selector: 'lib-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent extends ComponentDirective {
  @Input() value = '';

  @Input() kind: TextKindType = 'paragraph';

  @Input() color: TextColorType = 'default';

  constructor(protected override readonly injector: Injector) {
    super(injector, 'text');
  }

  protected override afterInit() {
    this.addClassName(this.kind);
    this.addClassName(this.color);
  }
}
