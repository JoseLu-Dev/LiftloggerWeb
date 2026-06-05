import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export type InputState = 'default' | 'error';
export type InputType = 'text' | 'numeric' | 'textarea';

@Component({
  selector: 'ds-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="field">
      @if (label) {
        <span class="label">{{ label }}</span>
      }
      <div class="input-wrap">
        @if (type === 'textarea') {
          <textarea
            class="textarea"
            [class.error]="state === 'error'"
            [placeholder]="placeholder"
            [disabled]="disabled"
            [value]="_value"
            (input)="onInput($event)"
            (blur)="onTouched()"
            [attr.aria-invalid]="state === 'error'"
            [attr.aria-describedby]="helpText ? fieldId + '-help' : null"
            [attr.rows]="rows"
          ></textarea>
        } @else {
          <input
            [class]="inputClass"
            [type]="type === 'numeric' ? 'text' : 'text'"
            [placeholder]="placeholder"
            [disabled]="disabled"
            [value]="_value"
            (input)="onInput($event)"
            (blur)="onTouched()"
            [attr.inputmode]="type === 'numeric' ? 'decimal' : null"
            [attr.min]="min ?? null"
            [attr.max]="max ?? null"
            [attr.aria-invalid]="state === 'error'"
            [attr.aria-describedby]="helpText ? fieldId + '-help' : null"
          />
          @if (unit) {
            <span class="unit-suffix">{{ unit }}</span>
          }
        }
      </div>
      @if (helpText) {
        <span [id]="fieldId + '-help'" [class]="'help ' + (state === 'error' ? 'error' : '')">
          {{ helpText }}
        </span>
      }
    </div>
  `,
  styleUrl: './input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: InputType = 'text';
  @Input() state: InputState = 'default';
  @Input() unit = '';
  @Input() helpText = '';
  @Input() disabled = false;
  @Input() rows = 3;
  @Input() min?: number;
  @Input() max?: number;
  @Input() set value(v: string) { this._value = v ?? ''; }
  get value(): string { return this._value; }

  readonly fieldId = `ds-input-${Math.random().toString(36).slice(2, 7)}`;
  _value = '';

  private onChange = (_: string) => {};
  onTouched = () => {};

  get inputClass(): string {
    return [
      'input',
      this.type === 'numeric' ? 'numeric' : '',
      this.state === 'error' ? 'error' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }

  onInput(event: Event): void {
    const v = (event.target as HTMLInputElement).value;
    this._value = v;
    this.onChange(v);
  }

  writeValue(value: string): void { this._value = value ?? ''; }
  registerOnChange(fn: (v: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}
