import { Injectable } from '@angular/core';

import { TextUtils } from '@english-learning/shared-utils';
import { blockEmptyInBemError } from '../const/error-message.const';

@Injectable({ providedIn: 'root' })
export class BemBuilderService {
  constructor(private readonly text: TextUtils) {}

  build(block = '', element = '', modifier = '') {
    const blockName = this.buildBlock(block);
    const elementName = this.buildName('__', element);
    const modifierName = this.buildName('--', modifier);
    return this.text.combine([blockName, elementName, modifierName], '');
  }

  private buildBlock(block: string) {
    if (this.text.isEmptyString(block)) {
      throw new Error(blockEmptyInBemError());
    }
    return this.buildName('', block);
  }

  private buildName(prefix: string, name: string) {
    if (this.text.isEmptyString(name)) return name;
    return this.text.addPrefix(prefix, name);
  }
}
