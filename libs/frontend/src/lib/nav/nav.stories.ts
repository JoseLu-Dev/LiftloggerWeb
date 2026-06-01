import type { Meta, StoryObj } from '@storybook/angular';
import { NavComponent } from './nav';

const meta: Meta<NavComponent> = {
  title: 'Design System/Nav',
  component: NavComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    activeLabel: { control: 'text' },
  },
  decorators: [
    (story) => ({
      template: `<div style="padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<NavComponent>;

export const Default: Story = {
  args: {
    activeLabel: 'Athletes',
    items: [
      { label: 'Dashboard' },
      { label: 'Athletes', count: 24 },
      { label: 'Programs' },
      { label: '---' },
      { label: 'Settings' },
    ],
  },
};

export const WithSubnav: Story = {
  args: {
    activeLabel: 'Squat',
    items: [
      { label: 'Dashboard' },
      { label: 'Athletes', count: 24 },
      {
        label: 'Programs',
        children: [{ label: 'Block 3' }, { label: 'Block 2' }, { label: 'Block 1' }],
      },
      { label: '---' },
      { label: 'Exercises', children: [{ label: 'Squat' }, { label: 'Bench press' }, { label: 'Deadlift' }] },
    ],
  },
};
