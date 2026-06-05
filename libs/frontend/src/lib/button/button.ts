import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  template: `
    <button
      [class]="hostClass"
      [disabled]="disabled || loading"
      [attr.aria-disabled]="disabled || loading"
      [attr.aria-busy]="loading || null"
      [attr.aria-label]="ariaLabel || null"
      type="button"
    >
      @if (loading) {
        <ds-spinner [size]="spinnerSize" [onAccent]="variant === 'primary'"></ds-spinner>
      } @else {
        <ng-content select="[slot=start]"></ng-content>
      }
      <span>{{ label }}</span>
      @if (!loading) {
        <ng-content select="[slot=end]"></ng-content>
        <ng-content></ng-content>
      }
    </button>
  `,
  styleUrl: './button.css',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() label = '';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() ariaLabel = '';

  get hostClass(): string {
    return `btn btn-${this.variant} btn-${this.size}`;
  }

  get spinnerSize(): 'sm' | 'md' | 'lg' {
    return this.size === 'lg' ? 'md' : 'sm';
  }
}
