import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TypeConverterService {
  convertMapToArray<TKey, TValue>(map: Map<TKey, TValue>): TValue[] {
    return Array.from(map).map(data => data[1]);
  }
}
