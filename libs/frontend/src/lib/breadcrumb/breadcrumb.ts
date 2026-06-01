import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

@Component({
  selector: 'ds-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="crumbs" aria-label="Breadcrumb">
      @for (item of items; track item.label; let i = $index; let last = $last) {
        @if (last) {
          <span class="crumb current" aria-current="page">{{ item.label }}</span>
        } @else {
          <a class="crumb" [attr.href]="item.href || null" [attr.role]="item.href ? null : 'button'" tabindex="0">
            {{ item.label }}
          </a>
          <svg class="crumb-sep" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        }
      }
    </nav>
  `,
  styleUrl: './breadcrumb.css',
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [
    { label: 'Athletes' },
    { label: 'Maya Okafor' },
  ];
}
