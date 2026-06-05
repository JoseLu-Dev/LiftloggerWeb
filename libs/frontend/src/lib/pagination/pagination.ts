import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="pg" aria-label="Pagination">
      <button
        class="pg-btn"
        [disabled]="currentPage <= 1"
        (click)="go(currentPage - 1)"
        aria-label="Previous page"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      @for (page of pages; track page) {
        @if (page === -1) {
          <span class="pg-ellipsis" aria-hidden="true">…</span>
        } @else {
          <button
            [class]="'pg-btn' + (page === currentPage ? ' pg-current' : '')"
            [attr.aria-current]="page === currentPage ? 'page' : null"
            [attr.aria-label]="'Page ' + page"
            (click)="go(page)"
          >{{ page }}</button>
        }
      }

      <button
        class="pg-btn"
        [disabled]="currentPage >= totalPages"
        (click)="go(currentPage + 1)"
        aria-label="Next page"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </nav>
  `,
  styleUrl: './pagination.css',
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage = 3;
  @Input() totalPages = 10;
  @Output() pageChange = new EventEmitter<number>();

  pages: number[] = [];

  ngOnChanges(): void {
    this.pages = this.buildPages();
  }

  go(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.pageChange.emit(page);
    this.pages = this.buildPages();
  }

  private buildPages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const result: number[] = [1];
    if (current > 3) result.push(-1);
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) result.push(i);
    if (current < total - 2) result.push(-1);
    result.push(total);
    return result;
  }
}
