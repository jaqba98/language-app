import { Component, Input } from '@angular/core';

import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { ComponentDirective } from '../../base/component.directive';
import { TextType } from './text.type';

@Component({
  selector: 'lib-text',
  standalone: true,
  imports: [...ComponentDirective.buildImports()],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent extends EventEmitterDirective<boolean> {
  @Input({ required: true }) value!: string;

  @Input() type: TextType = 'paragraph';

  protected override afterInit() {
    this.addClassName('text', this.type);
  }

  onClick() {
    this.emit(true);
  }
}
