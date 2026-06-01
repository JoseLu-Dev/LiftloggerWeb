import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardState = 'resting' | 'hover' | 'selected';

@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'card ' + state" [attr.aria-selected]="state === 'selected' ? true : null">
      @if (eyebrow) {
        <div class="eyebrow" [style.color]="state === 'selected' ? 'var(--blue-300)' : null">{{ eyebrow }}</div>
      }
      @if (heading) { <div class="heading">{{ heading }}</div> }
      @if (stat) { <div class="stat">{{ stat }}<span class="unit"> {{ unit }}</span></div> }
      @if (label) { <div class="label">{{ label }}</div> }
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './card.css',
})
export class CardComponent {
  @Input() eyebrow = '';
  @Input() heading = '';
  @Input() stat = '';
  @Input() unit = '';
  @Input() label = '';
  @Input() state: CardState = 'resting';
}
