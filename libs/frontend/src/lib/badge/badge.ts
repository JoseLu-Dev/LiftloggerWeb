import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'brand' | 'success' | 'warning' | 'danger' | 'neutral' | 'live' | 'pr';

@Component({
  selector: 'ds-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (variant === 'pr') {
      <span class="pr-badge">★ {{ label }}</span>
    } @else {
      <span [class]="'pill ' + variant">
        <span class="dot"></span>{{ label }}
      </span>
    }
  `,
  styleUrl: './badge.css',
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'brand';
  @Input() label = 'Active';
}
