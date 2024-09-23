import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BemService {
  buildBem(block = '', element = '', modifier = '') {
    const bemBlock = this.buildBemBlock(block);
    const bemElement = this.buildBemElement(element);
    const bemModifier = this.buildBemModifier(modifier);
    return `${bemBlock}${bemElement}${bemModifier}`;
  }

  private buildBemBlock(name: string, withDot = false) {
    if (name === '') {
      throw new Error('The block must not be empty in BEM!');
    }
    return withDot ? `.${name}` : name;
  }

  private buildBemElement(name: string) {
    return name === '' ? '' : `__${name}`;
  }

  private buildBemModifier(name: string) {
    return name === '' ? '' : `--${name}`;
  }
}
