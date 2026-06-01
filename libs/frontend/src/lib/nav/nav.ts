import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavItem {
  label: string;
  icon?: string;
  count?: string | number;
  children?: NavItem[];
}

@Component({
  selector: 'ds-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="nav" aria-label="Sidebar navigation">
      @for (item of items; track item.label; let i = $index) {
        @if (item.label === '---') {
          <div class="sep" role="separator"></div>
        } @else if (item.children?.length) {
          <button
            class="item"
            [class.active]="activeLabel === item.label"
            [class.parent]="true"
            [class.open]="openGroups[i]"
            (click)="toggleGroup(i, item)"
            [attr.aria-expanded]="openGroups[i]"
          >
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" [innerHTML]="item.icon || defaultIcon"></svg>
            <span>{{ item.label }}</span>
            @if (item.count) { <span class="count">{{ item.count }}</span> }
            <svg class="chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
          </button>
          <div class="subnav" [class.open]="openGroups[i]">
            <div class="subnav-inner">
              <div class="subnav-list">
                @for (child of item.children; track child.label) {
                  <button
                    class="subitem"
                    [class.active]="activeLabel === child.label"
                    (click)="setActive(child.label)"
                  >{{ child.label }}</button>
                }
              </div>
            </div>
          </div>
        } @else {
          <button
            class="item"
            [class.active]="activeLabel === item.label"
            (click)="setActive(item.label)"
          >
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" [innerHTML]="item.icon || defaultIcon"></svg>
            <span>{{ item.label }}</span>
            @if (item.count) { <span class="count">{{ item.count }}</span> }
          </button>
        }
      }
    </nav>
  `,
  styleUrl: './nav.css',
})
export class NavComponent {
  @Input() items: NavItem[] = [
    { label: 'Dashboard' },
    { label: 'Athletes', count: 24 },
    { label: 'Programs' },
    { label: '---' },
    { label: 'Settings' },
  ];
  @Input() activeLabel = 'Athletes';

  openGroups: Record<number, boolean> = {};

  readonly defaultIcon = '<circle cx="12" cy="12" r="4"/>';

  setActive(label: string): void {
    this.activeLabel = label;
  }

  toggleGroup(i: number, item: NavItem): void {
    this.openGroups[i] = !this.openGroups[i];
    this.activeLabel = item.label;
  }
}
