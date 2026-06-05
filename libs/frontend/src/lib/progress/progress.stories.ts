import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressComponent } from './progress';

const meta: Meta<ProgressComponent> = {
  title: 'Components/Progress',
  component: ProgressComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  args: {
    mode: 'linear',
    value: 64,
    label: 'Weekly volume',
  },
  argTypes: {
    mode: { control: 'select', options: ['linear', 'ring'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    label: { control: 'text' },
    meta: { control: 'text' },
  },
  decorators: [
    (story) => ({
      template: `<div style="width:320px;padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<ProgressComponent>;

export const Default: Story = {};
export const Ring: Story = {
  args: { mode: 'ring', value: 70, label: "Today's session", meta: '14 of 20 sets logged' },
};
export const Complete: Story = { args: { value: 100, label: 'Block complete' } };
export const Empty: Story = { args: { value: 0, label: 'Not started' } };

export const MultipleLinear: Story = {
  name: 'Multiple bars',
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
