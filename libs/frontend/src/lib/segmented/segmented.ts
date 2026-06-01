import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SegmentedMode = 'pill' | 'brand' | 'tabs';

@Component({
  selector: 'ds-segmented',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (mode === 'tabs') {
      <div class="tabs" role="tablist">
        @for (tab of options; track tab; let i = $index) {
          <button
            class="tab"
            [class.active]="activeIndex === i"
            role="tab"
            [attr.aria-selected]="activeIndex === i"
            (click)="select(i)"
          >{{ tab }}</button>
        }
      </div>
    } @else {
      <div [class]="'seg' + (mode === 'brand' ? ' brand' : '')" role="group" [attr.aria-label]="ariaLabel">
        @for (tab of options; track tab; let i = $index) {
          <button
            [class.active]="activeIndex === i"
            [attr.aria-pressed]="activeIndex === i"
            (click)="select(i)"
          >{{ tab }}</button>
        }
      </div>
    }
  `,
  styleUrl: './segmented.css',
})
export class SegmentedComponent {
  @Input() options: string[] = ['Day', 'Week', 'Block', 'All time'];
  @Input() activeIndex = 1;
  @Input() mode: SegmentedMode = 'pill';
  @Input() ariaLabel = 'Time range';

  @Output() activeIndexChange = new EventEmitter<number>();

  select(i: number): void {
    this.activeIndex = i;
    this.activeIndexChange.emit(i);
  }
}
