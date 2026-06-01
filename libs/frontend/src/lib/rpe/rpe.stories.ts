import type { Meta, StoryObj } from '@storybook/angular';
import { RpeComponent } from './rpe';

const meta: Meta<RpeComponent> = {
  title: 'Design System/RPE',
  component: RpeComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    initialValue: {
      control: { type: 'select' },
      options: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    },
  },
  decorators: [
    (story) => ({
      template: `<div style="padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<RpeComponent>;

export const Default: Story = { args: { initialValue: 7 } };
export const High: Story = { args: { initialValue: 9 } };
export const Max: Story = { args: { initialValue: 10 } };
