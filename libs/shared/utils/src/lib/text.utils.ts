import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TextUtils {
  combine(texts: string[], separator: string) {
    return texts.join(separator);
  }

  isEmptyString(text: string) {
    return text === '';
  }

  addPrefix(prefix: string, text: string) {
    return `${prefix}${text}`;
  }
}
