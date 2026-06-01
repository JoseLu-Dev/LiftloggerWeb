import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="empty" role="status">
      <div class="icon-wrap" aria-hidden="true">
        <ng-content select="[slot=icon]"></ng-content>
        @if (!hasIcon) {
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>
        }
      </div>
      <h3>{{ heading }}</h3>
      @if (body) { <p>{{ body }}</p> }
      @if (ctaLabel) {
        <button class="btn-ghost" type="button">{{ ctaLabel }}</button>
      }
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './empty-state.css',
})
export class EmptyStateComponent {
  @Input() heading = 'Nothing here yet';
  @Input() body = '';
  @Input() ctaLabel = '';
  @Input() hasIcon = false;
}
