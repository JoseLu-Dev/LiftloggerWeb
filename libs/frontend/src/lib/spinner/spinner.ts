import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [class]="'spinner ' + size + (onAccent ? ' on-accent' : '')"
      role="status"
      [attr.aria-label]="label"
    ></span>
  `,
  styleUrl: './spinner.css',
})
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() onAccent = false;
  @Input() label = 'Loading…';
}
