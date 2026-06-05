import type { Meta, StoryObj } from '@storybook/angular';
import { EmptyStateComponent } from './empty-state';

const meta: Meta<EmptyStateComponent> = {
  title: 'Components/EmptyState',
  component: EmptyStateComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  args: {
    heading: 'No sessions yet',
    body: "They'll show up here as athletes log their training.",
  },
  argTypes: {
    heading: { control: 'text' },
    body: { control: 'text' },
    ctaLabel: { control: 'text' },
  },
  decorators: [
    (story) => ({
      template: `<div style="width:280px;padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<EmptyStateComponent>;

export const Default: Story = {};
export const WithCTA: Story = {
  name: 'With CTA',
  args: { heading: 'No athletes match', body: 'Try clearing the filters or adjusting the date range.', ctaLabel: 'Clear filters' },
};
