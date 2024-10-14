import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventEmitterDirective } from '../../base/event-emitter.directive';
import { TextColorType, TextType } from './text.type';
import { ClickActionDirective } from '../../action/click-action.directive';

@Component({
  selector: 'lib-text',
  standalone: true,
  imports: [CommonModule, ClickActionDirective],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
/**
 * Text Component
 */
export class TextComponent extends EventEmitterDirective<boolean> {
  @Input({ required: true }) value!: string;

  @Input() type: TextType = 'paragraph';

  @Input() color: TextColorType = 'default';

  protected readonly block = 'text';

  protected override afterInit() {
    this.addClassName(this.block);
    this.addClassName(this.block, this.type);
    this.addClassName(this.block, this.color);
  }

  onEvent(eventData: boolean) {
    this.emit(eventData);
  }
}
