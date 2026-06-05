import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'ds-typography-specimen',
  standalone: true,
  template: `
    <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:var(--bg-0);min-width:560px">
      <div>
        <span style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-3)">Display XL</span>
        <div class="display-xl" style="letter-spacing:var(--tracking-display-xl);color:var(--fg-1)">182.5</div>
      </div>
      <div>
        <span style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-3)">Display L</span>
        <div class="display-l" style="letter-spacing:var(--tracking-display);color:var(--fg-1)">Weekly volume</div>
      </div>
      <div>
        <span style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-3)">H1</span>
        <h1>Athlete dashboard</h1>
      </div>
      <div>
        <span style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-3)">H2</span>
        <h2>Block 3 · Week 2</h2>
      </div>
      <div>
        <span style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-3)">H3 / Eyebrow</span>
        <h3>Top set</h3>
      </div>
      <div>
        <span style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-3)">Body</span>
        <p>Log your sets and track your progress towards your top lifts.</p>
      </div>
      <div>
        <span style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-3)">Body small</span>
        <p><small>5-rep PR · 22 Aug · Block 2</small></p>
      </div>
      <div>
        <span style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-3)">Numeric stat-xl</span>
        <div class="stat-xl" style="color:var(--fg-1)">42.8<span style="color:var(--fg-3);font-size:0.5em"> t</span></div>
      </div>
      <div>
        <span style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-3)">Mono code</span>
        <code>182.5 kg · RPE 8</code>
      </div>
    </div>
  `,
})
class TypographySpecimenComponent {}

const meta: Meta<TypographySpecimenComponent> = {
  title: 'Foundation/Typography',
  component: TypographySpecimenComponent,
  parameters: { layout: 'centered', backgrounds: { default: 'canvas' } },
};

export default meta;
type Story = StoryObj<TypographySpecimenComponent>;
export const Typography: Story = {};
