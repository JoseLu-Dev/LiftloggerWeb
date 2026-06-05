import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  args: {
    state: 'resting',
    eyebrow: 'Exercise',
    heading: 'Squat',
    stat: '182.5',
    unit: 'kg',
    label: '5-rep PR · 22 Aug',
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

export const Default: Story = {};
export const Hover: Story = { args: { state: 'hover', heading: 'Bench press', stat: '125.0', label: 'Last logged · 3d' } };
export const Selected: Story = { args: { state: 'selected', heading: 'Deadlift', stat: '220.0', label: 'Top set · today' } };

export const AllStates: Story = {
  name: 'All states',
  render: () => ({
    template: `
      <div style="display:grid;grid-template-columns:repeat(3,200px);gap:18px;padding:24px;background:var(--bg-0)">
        <ds-card eyebrow="Exercise" heading="Squat"       stat="182.5" unit="kg" label="5-rep PR · 22 Aug"  state="resting"></ds-card>
        <ds-card eyebrow="Exercise" heading="Bench press" stat="125.0" unit="kg" label="Last logged · 3d"   state="hover"></ds-card>
        <ds-card eyebrow="Exercise" heading="Deadlift"    stat="220.0" unit="kg" label="Top set · today"    state="selected"></ds-card>
      </div>
    `,
    moduleMetadata: { imports: [CardComponent] },
  }),
};
