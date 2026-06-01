import type { Meta, StoryObj } from '@storybook/angular';
import { StatCardComponent } from './stat-card';

const meta: Meta<StatCardComponent> = {
  title: 'Design System/StatCard',
  component: StatCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    deltaDir: { control: 'select', options: ['up', 'down', 'none'] },
    pr: { control: 'boolean' },
    eyebrow: { control: 'text' },
    value: { control: 'text' },
    unit: { control: 'text' },
    delta: { control: 'text' },
    meta: { control: 'text' },
  },
  decorators: [
    (story) => ({
      template: `<div style="width:280px;padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<StatCardComponent>;

export const Default: Story = {
  args: {
    eyebrow: 'Weekly volume',
    value: '42.8',
    unit: 't',
    delta: '↑ +5.2%',
    deltaDir: 'up',
    meta: 'vs. last week — 40.6 t',
  },
};

export const PRHighlight: Story = {
  args: {
    eyebrow: '★ Fresh PR',
    value: '182.5',
    unit: 'kg',
    delta: '+5.0',
    deltaDir: 'up',
    meta: 'Squat · 5-rep · 22 Aug',
    pr: true,
  },
};

export const Negative: Story = {
  args: {
    eyebrow: 'e1RM',
    value: '215.0',
    unit: 'kg',
    delta: '↓ -3.1%',
    deltaDir: 'down',
    meta: 'vs. last week',
  },
};

export const Grid: Story = {
  name: 'Grid (2 cards)',
  render: () => ({
    template: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:24px;background:var(--bg-0)">
        <ds-stat-card eyebrow="Weekly volume" value="42.8" unit="t" delta="↑ +5.2%" deltaDir="up" meta="vs. last week — 40.6 t"></ds-stat-card>
        <ds-stat-card eyebrow="★ Fresh PR" value="182.5" unit="kg" delta="+5.0" deltaDir="up" meta="Squat · 5-rep · 22 Aug" [pr]="true"></ds-stat-card>
      </div>
    `,
    moduleMetadata: { imports: [StatCardComponent] },
  }),
};
