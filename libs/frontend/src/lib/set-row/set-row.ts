import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SetValues {
  reps: number | string;
  weight: number | string;
  rpe: number | string;
}

@Component({
  selector: 'ds-set-row',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="set-table">
      <div class="row-grid header-row">
        <span></span>
        <div class="value-group">
          <span class="section-lbl">Target</span>
        </div>
        <span></span>
        <div class="value-group">
          <span class="section-lbl">Actual</span>
        </div>
        <span></span>
      </div>
      <div class="row-grid header-row col-header">
        <span></span>
        <div class="value-group">
          <span class="col-lbl">Reps</span>
          <span class="col-lbl">Weight</span>
          <span class="col-lbl">RPE</span>
        </div>
        <span></span>
        <div class="value-group">
          <span class="col-lbl">Reps</span>
          <span class="col-lbl">Weight</span>
          <span class="col-lbl">RPE</span>
        </div>
        <span></span>
      </div>

      @for (row of rows; track row.setNumber) {
        <div class="row-grid set-row">
          <span class="set-n">{{ row.setNumber }}</span>
          <div class="value-group">
            <div class="value-cell target">
              <span class="value-main">{{ row.target.reps }}</span>
              <span class="value-unit">reps</span>
            </div>
            <div class="value-cell target">
              <span class="value-main">{{ row.target.weight }}</span>
              <span class="value-unit">kg</span>
            </div>
            <div class="value-cell target">
              <span class="value-main">{{ row.target.rpe }}</span>
              <span class="value-unit">rpe</span>
            </div>
          </div>
          <svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
          <div class="value-group">
            <div class="value-cell actual">
              <span class="value-main">{{ row.actual.reps || '—' }}</span>
              <span class="value-unit">reps</span>
            </div>
            <div class="value-cell actual">
              <span class="value-main">{{ row.actual.weight || '—' }}</span>
              <span class="value-unit">kg</span>
            </div>
            <div class="value-cell actual">
              <span class="value-main">{{ row.actual.rpe || '—' }}</span>
              <span class="value-unit">rpe</span>
            </div>
          </div>
          <span></span>
        </div>
      }
    </div>
  `,
  styleUrl: './set-row.css',
})
export class SetRowComponent {
  @Input() rows: Array<{ setNumber: number; target: SetValues; actual: SetValues }> = [
    { setNumber: 1, target: { reps: 5, weight: '175', rpe: 7 }, actual: { reps: 5, weight: '175', rpe: 7 } },
    { setNumber: 2, target: { reps: 5, weight: '177.5', rpe: 7.5 }, actual: { reps: 5, weight: '177.5', rpe: 8 } },
    { setNumber: 3, target: { reps: 5, weight: '182.5', rpe: 8 }, actual: { reps: '', weight: '', rpe: '' } },
  ];
}
