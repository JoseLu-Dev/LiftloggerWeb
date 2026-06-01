import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="hostClass"
      [disabled]="disabled"
      [attr.aria-disabled]="disabled"
      [attr.aria-label]="ariaLabel || null"
      type="button"
    >
      <ng-content select="[slot=start]"></ng-content>
      <span>{{ label }}</span>
      <ng-content select="[slot=end]"></ng-content>
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './button.css',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() label = '';
  @Input() disabled = false;
  @Input() ariaLabel = '';

  get hostClass(): string {
    return `btn btn-${this.variant} btn-${this.size}`;
  }
}
