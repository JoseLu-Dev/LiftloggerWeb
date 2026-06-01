import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressComponent } from './progress';

const meta: Meta<ProgressComponent> = {
  title: 'Design System/Progress',
  component: ProgressComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    mode: { control: 'select', options: ['linear', 'ring'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    label: { control: 'text' },
    meta: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ProgressComponent>;

export const Linear: Story = {
  args: { mode: 'linear', value: 64, label: 'Weekly volume' },
  decorators: [
    (story) => ({
      template: `<div style="width:320px;padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export const Ring: Story = {
  args: { mode: 'ring', value: 70, label: "Today's session", meta: '14 of 20 sets logged' },
};

export const MultipleLinear: Story = {
  name: 'Multiple linear bars',
  render: () => ({
    template: `
      <div style="width:320px;display:flex;flex-direction:column;gap:18px;padding:24px;background:var(--bg-0)">
        <div>
          <div style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-2);margin-bottom:8px">Weekly volume · 64%</div>
          <ds-progress mode="linear" [value]="64" label="Weekly volume"></ds-progress>
        </div>
        <div>
          <div style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-2);margin-bottom:8px">Block completion · 38%</div>
          <ds-progress mode="linear" [value]="38" label="Block completion"></ds-progress>
        </div>
        <div>
          <div style="font:var(--t-caption);letter-spacing:var(--tracking-caption);text-transform:uppercase;color:var(--fg-2);margin-bottom:8px">PR projection · 92%</div>
          <ds-progress mode="linear" [value]="92" label="PR projection"></ds-progress>
        </div>
      </div>
    `,
    moduleMetadata: { imports: [ProgressComponent] },
  }),
};
