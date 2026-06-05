import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ProgressMode = 'linear' | 'ring';

@Component({
  selector: 'ds-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (mode === 'linear') {
      <div class="lin" [attr.aria-valuenow]="value" [attr.aria-valuemin]="0" [attr.aria-valuemax]="100" role="progressbar" [attr.aria-label]="label">
        <div class="bar" [style.width.%]="clampedValue"></div>
      </div>
    } @else {
      <div class="ring-wrap" role="progressbar" [attr.aria-valuenow]="value" [attr.aria-valuemin]="0" [attr.aria-valuemax]="100" [attr.aria-label]="label">
        <div class="ring">
          <svg viewBox="0 0 100 100">
            <circle class="track" cx="50" cy="50" r="42"/>
            <circle class="arc" cx="50" cy="50" r="42"
              stroke-dasharray="264"
              [attr.stroke-dashoffset]="ringOffset"/>
          </svg>
          <span class="pct">{{ clampedValue }}%</span>
        </div>
        @if (meta) {
          <div class="meta-block">
            <div class="ring-title">{{ label }}</div>
            <div class="ring-meta">{{ meta }}</div>
          </div>
        }
      </div>
    }
  `,
  styleUrl: './progress.css',
})
export class ProgressComponent {
  @Input() mode: ProgressMode = 'linear';
  @Input() value = 70;
  @Input() label = 'Progress';
  @Input() meta = '';

  get clampedValue(): number {
    return Math.min(100, Math.max(0, Math.round(this.value)));
  }

  get ringOffset(): number {
    const circumference = 264;
    return circumference - (this.clampedValue / 100) * circumference;
  }
}
