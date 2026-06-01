import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ChartDataPoint {
  label: string;
  primary: number;
  secondary?: number;
}

@Component({
  selector: 'ds-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chart-card">
      <div class="chart-head">
        <div>
          @if (eyebrow) { <div class="chart-eyebrow">{{ eyebrow }}</div> }
          <div class="chart-title">{{ title }}</div>
        </div>
        <div class="chart-legend">
          @if (primaryLabel) {
            <div class="legend-item">
              <div class="legend-line" style="background:var(--blue-500)"></div>
              {{ primaryLabel }}
            </div>
          }
          @if (secondaryLabel) {
            <div class="legend-item">
              <div class="legend-line" style="background:var(--fg-3)"></div>
              {{ secondaryLabel }}
            </div>
          }
        </div>
      </div>
      <div class="chart-wrap" (mousemove)="onMouseMove($event)" (mouseleave)="hideTooltip()">
        <svg #svgEl id="chart-svg" viewBox="0 0 560 200" preserveAspectRatio="none" role="img" [attr.aria-label]="title + ' chart'">
          <!-- Y grid lines -->
          @for (line of gridLines; track line) {
            <line [attr.x1]="0" [attr.y1]="line" [attr.x2]="560" [attr.y2]="line" stroke="var(--line)" stroke-width="1"/>
          }
          <!-- Secondary area + line -->
          @if (hasSecondary) {
            <path [attr.d]="secondaryArea" fill="rgba(90,105,125,0.12)"/>
            <path [attr.d]="secondaryLine" fill="none" stroke="var(--fg-3)" stroke-width="1.5" stroke-linejoin="round"/>
          }
          <!-- Primary area + line -->
          <path [attr.d]="primaryArea" fill="rgba(61,134,255,0.12)"/>
          <path [attr.d]="primaryLine" fill="none" stroke="var(--blue-500)" stroke-width="2" stroke-linejoin="round"/>
          <!-- Dots at each data point -->
          @for (pt of primaryPoints; track pt.x) {
            <circle [attr.cx]="pt.x" [attr.cy]="pt.y" r="3" fill="var(--blue-500)"/>
          }
          <!-- Hover line -->
          @if (hoverIndex >= 0) {
            <line
              [attr.x1]="primaryPoints[hoverIndex]?.x" [attr.y1]="0"
              [attr.x2]="primaryPoints[hoverIndex]?.x" [attr.y2]="200"
              stroke="var(--line-strong)" stroke-width="1" stroke-dasharray="4 4"/>
          }
        </svg>
        <!-- Tooltip -->
        @if (hoverIndex >= 0) {
          <div class="chart-tooltip" [style.left.px]="tooltipX" [style.top.px]="tooltipY">
            <div class="tt-week">{{ data[hoverIndex]?.label }}</div>
            <div class="tt-row">
              <div class="tt-dot" style="background:var(--blue-500)"></div>
              <span class="tt-label">{{ primaryLabel || 'Value' }}</span>
              <span class="tt-val">{{ data[hoverIndex]?.primary }}</span>
            </div>
            @if (hasSecondary && data[hoverIndex]?.secondary !== undefined) {
              <div class="tt-row">
                <div class="tt-dot" style="background:var(--fg-3)"></div>
                <span class="tt-label">{{ secondaryLabel }}</span>
                <span class="tt-val">{{ data[hoverIndex]?.secondary }}</span>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './chart.css',
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() eyebrow = '';
  @Input() title = 'Weekly volume';
  @Input() primaryLabel = 'This block';
  @Input() secondaryLabel = 'Last block';
  @Input() unit = 't';
  @Input() data: ChartDataPoint[] = [
    { label: 'W1', primary: 28.4, secondary: 26.0 },
    { label: 'W2', primary: 32.1, secondary: 29.5 },
    { label: 'W3', primary: 35.8, secondary: 31.2 },
    { label: 'W4', primary: 38.2, secondary: 34.1 },
    { label: 'W5', primary: 42.8, secondary: 37.6 },
    { label: 'W6', primary: 40.1, secondary: 39.0 },
  ];

  @ViewChild('svgEl') svgEl!: ElementRef<SVGElement>;

  hoverIndex = -1;
  tooltipX = 0;
  tooltipY = 0;
  gridLines = [40, 80, 120, 160];

  primaryLine = '';
  primaryArea = '';
  primaryPoints: Array<{ x: number; y: number }> = [];
  secondaryLine = '';
  secondaryArea = '';
  hasSecondary = false;

  readonly W = 560;
  readonly H = 200;
  readonly PAD = 20;

  ngOnInit(): void {
    this.buildPaths();
  }

  ngOnChanges(): void {
    this.buildPaths();
  }

  private buildPaths(): void {
    if (!this.data?.length) return;
    const allVals = this.data.flatMap(d => [d.primary, ...(d.secondary !== undefined ? [d.secondary] : [])]);
    const min = Math.min(...allVals) * 0.9;
    const max = Math.max(...allVals) * 1.05;
    const scaleX = (i: number) => this.PAD + (i / (this.data.length - 1)) * (this.W - this.PAD * 2);
    const scaleY = (v: number) => this.H - this.PAD - ((v - min) / (max - min)) * (this.H - this.PAD * 2);

    this.primaryPoints = this.data.map((d, i) => ({ x: scaleX(i), y: scaleY(d.primary) }));
    this.primaryLine = this.primaryPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
    this.primaryArea = this.primaryLine + ` L${scaleX(this.data.length - 1)},${this.H} L${scaleX(0)},${this.H} Z`;

    this.hasSecondary = this.data.some(d => d.secondary !== undefined);
    if (this.hasSecondary) {
      const secPts = this.data.map((d, i) => ({ x: scaleX(i), y: scaleY(d.secondary ?? d.primary) }));
      this.secondaryLine = secPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
      this.secondaryArea = this.secondaryLine + ` L${scaleX(this.data.length - 1)},${this.H} L${scaleX(0)},${this.H} Z`;
    }
  }

  onMouseMove(event: MouseEvent): void {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const relX = x / rect.width;
    this.hoverIndex = Math.min(
      this.data.length - 1,
      Math.max(0, Math.round(relX * (this.data.length - 1)))
    );
    this.tooltipX = Math.min(x + 12, rect.width - 170);
    this.tooltipY = (event.clientY - rect.top) - 30;
  }

  hideTooltip(): void {
    this.hoverIndex = -1;
  }
}
