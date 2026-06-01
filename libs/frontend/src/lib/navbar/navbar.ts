import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavbarTab {
  label: string;
  icon: string;
}

@Component({
  selector: 'ds-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="m-tabbar" aria-label="Bottom navigation">
      @for (tab of tabs; track tab.label; let i = $index) {
        <button
          class="m-tab"
          [class.active]="activeIndex === i"
          [attr.aria-current]="activeIndex === i ? 'page' : null"
          [attr.aria-label]="tab.label"
          (click)="select(i)"
        >
          <svg class="tab-icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" [innerHTML]="tab.icon"></svg>
          <span>{{ tab.label }}</span>
        </button>
      }
    </nav>
  `,
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  @Input() tabs: NavbarTab[] = [
    { label: 'Today', icon: '<path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { label: 'History', icon: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
    { label: 'Profile', icon: '<circle cx="12" cy="9" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4 21a8 8 0 0 1 16 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  ];
  @Input() activeIndex = 0;

  @Output() activeIndexChange = new EventEmitter<number>();

  select(i: number): void {
    this.activeIndex = i;
    this.activeIndexChange.emit(i);
  }
}
