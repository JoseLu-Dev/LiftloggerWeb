import type { Meta, StoryObj } from '@storybook/angular';
import { SegmentedComponent } from './segmented';

const meta: Meta<SegmentedComponent> = {
  title: 'Design System/Segmented',
  component: SegmentedComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    mode: { control: 'select', options: ['pill', 'brand', 'tabs'] },
    activeIndex: { control: { type: 'number', min: 0 } },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SegmentedComponent>;

export const Pill: Story = {
  args: { mode: 'pill', options: ['Day', 'Week', 'Block', 'All time'], activeIndex: 1 },
};

export const Brand: Story = {
  args: { mode: 'brand', options: ['Coach', 'Athlete'], activeIndex: 1 },
};

export const Tabs: Story = {
  args: { mode: 'tabs', options: ['Overview', 'Sessions', 'Program', 'Notes'], activeIndex: 0 },
  decorators: [
    (story) => ({
      template: `<div style="width:400px;padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};
