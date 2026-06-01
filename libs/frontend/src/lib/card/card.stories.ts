import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card';

const meta: Meta<CardComponent> = {
  title: 'Design System/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    state: { control: 'select', options: ['resting', 'hover', 'selected'] },
    eyebrow: { control: 'text' },
    heading: { control: 'text' },
    stat: { control: 'text' },
    unit: { control: 'text' },
    label: { control: 'text' },
  },
  decorators: [
    (story) => ({
      template: `<div style="width:220px;padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Resting: Story = {
  args: { eyebrow: 'Resting', heading: 'Squat', stat: '182.5', unit: 'kg', label: '5-rep PR · 22 Aug' },
};

export const Hover: Story = {
  args: { eyebrow: 'Hover', heading: 'Bench press', stat: '125.0', unit: 'kg', label: 'Last logged · 3d', state: 'hover' },
};

export const Selected: Story = {
  args: { eyebrow: 'Selected', heading: 'Deadlift', stat: '220.0', unit: 'kg', label: 'Top set · today', state: 'selected' },
};

export const AllStates: Story = {
  name: 'All states',
  render: () => ({
    template: `
      <div style="display:grid;grid-template-columns:repeat(3,200px);gap:18px;padding:24px;background:var(--bg-0)">
        <ds-card eyebrow="Resting" heading="Squat" stat="182.5" unit="kg" label="5-rep PR · 22 Aug" state="resting"></ds-card>
        <ds-card eyebrow="Hover" heading="Bench press" stat="125.0" unit="kg" label="Last logged · 3d" state="hover"></ds-card>
        <ds-card eyebrow="Selected" heading="Deadlift" stat="220.0" unit="kg" label="Top set · today" state="selected"></ds-card>
      </div>
    `,
    moduleMetadata: { imports: [CardComponent] },
  }),
};
