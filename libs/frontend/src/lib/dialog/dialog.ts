import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DialogVariant = 'default' | 'danger' | 'warning';

@Component({
  selector: 'ds-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="overlay"
      [class.open]="open"
      (click)="onOverlayClick($event)"
      [attr.aria-hidden]="!open"
      role="presentation"
    >
      <div
        class="dialog"
        role="dialog"
        [attr.aria-modal]="open"
        [attr.aria-labelledby]="dialogId + '-title'"
        [attr.aria-describedby]="body ? dialogId + '-body' : null"
        (click)="$event.stopPropagation()"
      >
        <div class="dialog-head">
          <span [id]="dialogId + '-title'" class="dialog-title">{{ title }}</span>
          <button class="close-btn" (click)="close()" aria-label="Close dialog" type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        @if (body) {
          <p [id]="dialogId + '-body'" class="dialog-body">{{ body }}</p>
        }
        <ng-content></ng-content>
        <div class="dialog-footer">
          <button class="btn btn-secondary" type="button" (click)="cancel()">{{ cancelLabel }}</button>
          <button [class]="'btn btn-' + confirmVariantClass" type="button" (click)="confirm()">{{ confirmLabel }}</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './dialog.css',
})
export class DialogComponent {
  @Input() open = true;
  @Input() title = 'Confirm action';
  @Input() body = '';
  @Input() confirmLabel = 'Confirm';
  @Input() cancelLabel = 'Cancel';
  @Input() variant: DialogVariant = 'default';

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();
  @Output() openChange = new EventEmitter<boolean>();

  readonly dialogId = `ds-dialog-${Math.random().toString(36).slice(2, 7)}`;

  get confirmVariantClass(): string {
    return this.variant === 'danger' ? 'danger-fill' : this.variant === 'warning' ? 'warning-fill' : 'primary';
  }

  close(): void {
    this.open = false;
    this.openChange.emit(false);
  }

  confirm(): void {
    this.confirmed.emit();
    this.close();
  }

  cancel(): void {
    this.cancelled.emit();
    this.close();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.close();
    }
  }
}
