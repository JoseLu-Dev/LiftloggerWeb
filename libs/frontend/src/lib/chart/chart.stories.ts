import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { ChartComponent } from './chart';

@Component({
  selector: 'ds-chart-demo',
  standalone: true,
  imports: [ChartComponent],
  template: `
    <div style="width:560px;padding:24px;background:var(--bg-0)">
      <ds-chart
        eyebrow="Block 3"
        title="Weekly volume"
        primaryLabel="This block"
        secondaryLabel="Last block"
        unit="t"
        [data]="data"
      ></ds-chart>
    </div>
  `,
})
class ChartDemoComponent {
  data = [
    { label: 'W1', primary: 28.4, secondary: 26.0 },
    { label: 'W2', primary: 32.1, secondary: 29.5 },
    { label: 'W3', primary: 35.8, secondary: 31.2 },
    { label: 'W4', primary: 38.2, secondary: 34.1 },
    { label: 'W5', primary: 42.8, secondary: 37.6 },
    { label: 'W6', primary: 40.1, secondary: 39.0 },
  ];
}

const meta: Meta<ChartComponent> = {
  title: 'Components/Chart',
  component: ChartComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    eyebrow: { control: 'text' },
    title: { control: 'text' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
    unit: { control: 'text' },
  },
  decorators: [
    (story) => ({
      template: `<div style="width:560px;padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<ChartComponent>;

export const Default: Story = {
  args: {
    eyebrow: 'Block 3',
    title: 'Weekly volume',
    primaryLabel: 'This block',
    secondaryLabel: 'Last block',
    unit: 't',
    data: [
      { label: 'W1', primary: 28.4, secondary: 26.0 },
      { label: 'W2', primary: 32.1, secondary: 29.5 },
      { label: 'W3', primary: 35.8, secondary: 31.2 },
      { label: 'W4', primary: 38.2, secondary: 34.1 },
      { label: 'W5', primary: 42.8, secondary: 37.6 },
      { label: 'W6', primary: 40.1, secondary: 39.0 },
    ],
  },
};

export const Rendered: Story = {
  name: 'Weekly volume (rendered)',
  render: () => ({
    template: `<ds-chart-demo></ds-chart-demo>`,
    moduleMetadata: { imports: [ChartDemoComponent] },
  }),
};

export const SingleSeries: Story = {
  args: {
    title: 'e1RM — Squat',
    primaryLabel: 'e1RM',
    secondaryLabel: '',
    unit: 'kg',
    data: [
      { label: 'Jan', primary: 185 },
      { label: 'Feb', primary: 190 },
      { label: 'Mar', primary: 195 },
      { label: 'Apr', primary: 200 },
      { label: 'May', primary: 205 },
      { label: 'Jun', primary: 210 },
    ],
  },
};
