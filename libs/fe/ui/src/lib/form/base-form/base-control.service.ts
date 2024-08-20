import { Injectable, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BaseControlService<TValue> implements ControlValueAccessor {
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

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    switch (target.type) {
      case 'input':
        this.value = <TValue> target.value;
        break;
      default:
        throw new Error(`The ${target.type} is an unsupported control type!`);
    }
    this.onChange(this.value);
    this.onTouched();
  }
}
