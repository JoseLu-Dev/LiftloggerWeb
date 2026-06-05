import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DeltaDirection = 'up' | 'down' | 'none';

@Component({
  selector: 'ds-stat-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'stat-card' + (pr ? ' pr' : '')">
      <span class="eyebrow" [style.color]="pr ? 'var(--blue-300)' : null">{{ eyebrow }}</span>
      <div class="row">
        <span class="v">{{ value }}</span>
        @if (unit) { <span class="u">{{ unit }}</span> }
        @if (delta) {
          <span [class]="'delta ' + deltaDir">{{ delta }}</span>
        }
      </div>
      @if (meta) { <span class="meta">{{ meta }}</span> }
    </div>
  `,
  styleUrl: './stat-card.css',
})
export class StatCardComponent {
  @Input() eyebrow = 'Weekly volume';
  @Input() value = '42.8';
  @Input() unit = 't';
  @Input() delta = '↑ +5.2%';
  @Input() deltaDir: DeltaDirection = 'up';
  @Input() meta = 'vs. last week — 40.6 t';
  @Input() pr = false;
}
