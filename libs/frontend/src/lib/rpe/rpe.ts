import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RpeItem {
  value: number;
  isHalf: boolean;
  label: string;
}

@Component({
  selector: 'ds-rpe',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rpe-card" [attr.aria-label]="'RPE picker, current value: ' + selectedValue">
      <div class="rpe-body">
        <div class="picker-wrap" (wheel)="onWheel($event)">
          <div class="selection-bar" aria-hidden="true"></div>
          @for (item of items; track item.label; let i = $index) {
            <div
              [class]="getItemClass(i)"
              (click)="selectIndex(i)"
              [attr.aria-label]="'RPE ' + item.label"
              role="option"
              [attr.aria-selected]="selectedIndex === i"
            >
              <span class="item-num">{{ item.label }}</span>
            </div>
          }
        </div>
        <div class="rpe-display" aria-live="polite">
          <span class="rpe-val">{{ selectedValue }}</span>
          <span class="rpe-label">RPE</span>
        </div>
      </div>
    </div>
  `,
  styleUrl: './rpe.css',
})
export class RpeComponent {
  @Input() initialValue = 7;
  @Output() rpeChange = new EventEmitter<number>();

  readonly items: RpeItem[] = this.buildItems();
  selectedIndex: number;

  constructor() {
    const idx = this.items.findIndex(i => i.value === this.initialValue && !i.isHalf);
    this.selectedIndex = idx >= 0 ? idx : 2;
  }

  get selectedValue(): number {
    return this.items[this.selectedIndex]?.value ?? 7;
  }

  getItemClass(i: number): string {
    const diff = Math.abs(i - this.selectedIndex);
    const item = this.items[i];
    const classes = ['picker-item'];
    if (item.isHalf) classes.push('item-half');
    if (i === this.selectedIndex) classes.push('active');
    else if (diff === 1) classes.push('adj-1');
    else if (diff === 2) classes.push('adj-2');
    return classes.join(' ');
  }

  selectIndex(i: number): void {
    this.selectedIndex = i;
    this.rpeChange.emit(this.items[i].value);
  }

  onWheel(event: WheelEvent): void {
    event.preventDefault();
    const dir = event.deltaY > 0 ? 1 : -1;
    const next = Math.min(this.items.length - 1, Math.max(0, this.selectedIndex + dir));
    this.selectIndex(next);
  }

  private buildItems(): RpeItem[] {
    const result: RpeItem[] = [];
    for (let v = 6; v <= 10; v++) {
      result.push({ value: v, isHalf: false, label: String(v) });
      if (v < 10) result.push({ value: v + 0.5, isHalf: true, label: `${v}.5` });
    }
    return result;
  }
}
