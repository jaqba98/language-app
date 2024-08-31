import { Injectable, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseControlService<TValue>
  implements ControlValueAccessor
{
  static getProvider<TComponent>(component: TComponent) {
    return {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => component),
      multi: true,
    };
  }

  value!: TValue;

  onChange: (value: TValue) => void = () => {};

  onTouched: () => void = () => {};

  writeValue(value: TValue): void {
    this.value = value;
  }

  registerOnChange(fn: (value: TValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value as TValue;
    this.onChange(this.value);
    this.onTouched();
  }

  onButton() {
    this.value = true as TValue;
    this.onChange(this.value);
    this.onTouched();
  }
}
