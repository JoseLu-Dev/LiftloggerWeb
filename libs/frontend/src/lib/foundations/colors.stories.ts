import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-color-palette',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="display:flex;flex-direction:column;gap:32px;padding:32px;background:var(--bg-0);min-width:600px">
      <section>
        <h3 style="color:var(--fg-2);font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;margin-bottom:12px">Brand blue</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <div *ngFor="let s of blues" class="swatch" [style.background]="s.val">
            <span class="swatch-label">{{ s.name }}</span>
            <span class="swatch-hex">{{ s.val }}</span>
          </div>
        </div>
      </section>
      <section>
        <h3 style="color:var(--fg-2);font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;margin-bottom:12px">Surfaces</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <div *ngFor="let s of surfaces" class="swatch" [style.background]="s.val" [style.border]="'1px solid var(--line-strong)'">
            <span class="swatch-label" style="color:var(--fg-1)">{{ s.name }}</span>
            <span class="swatch-hex" style="color:var(--fg-2)">{{ s.val }}</span>
          </div>
        </div>
      </section>
      <section>
        <h3 style="color:var(--fg-2);font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;margin-bottom:12px">Semantic</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <div *ngFor="let s of semantic" class="swatch" [style.background]="s.val">
            <span class="swatch-label">{{ s.name }}</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .swatch {
      width: 100px; height: 80px;
      border-radius: var(--r-md);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 4px; padding: 8px;
    }
    .swatch-label { font: var(--t-caption); letter-spacing: var(--tracking-caption); text-transform: uppercase; color: #fff; font-weight: 600; }
    .swatch-hex { font-family: var(--font-mono); font-size: 10px; color: rgba(255,255,255,0.7); }
  `],
})
class ColorPaletteComponent {
  blues = [
    { name: '300', val: '#9AC2FF' },
    { name: '400', val: '#5E9DFF' },
    { name: '500', val: '#3D86FF' },
    { name: '600', val: '#1E66EB' },
    { name: '700', val: '#1850C0' },
  ];
  surfaces = [
    { name: 'bg-0', val: '#05070B' },
    { name: 'bg-1', val: '#171D29' },
    { name: 'bg-2', val: '#212A38' },
    { name: 'bg-3', val: '#2B3543' },
  ];
  semantic = [
    { name: 'Success', val: '#3FB68A' },
    { name: 'Warning', val: '#E0A458' },
    { name: 'Danger', val: '#E5645A' },
  ];
}

const meta: Meta<ColorPaletteComponent> = {
  title: 'Design System/Foundations/Colors',
  component: ColorPaletteComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', backgrounds: { default: 'canvas' } },
};

export default meta;
type Story = StoryObj<ColorPaletteComponent>;
export const Colors: Story = {};
