import type { Meta, StoryObj } from '@storybook/angular';
import { EmptyStateComponent } from './empty-state';

const meta: Meta<EmptyStateComponent> = {
  title: 'Design System/EmptyState',
  component: EmptyStateComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
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

export const NoSessions: Story = {
  args: {
    heading: 'No sessions yet',
    body: "They'll show up here as athletes log their training.",
  },
};

export const NoResults: Story = {
  args: {
    heading: 'No athletes match',
    body: 'Try clearing the filters or adjusting the date range.',
    ctaLabel: 'Clear filters',
  },
};

export const Grid: Story = {
  name: 'Grid (2 states)',
  render: () => ({
    template: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:24px;background:var(--bg-0)">
        <ds-empty-state heading="No sessions yet" body="They'll show up here as athletes log their training."></ds-empty-state>
        <ds-empty-state heading="No athletes match" body="Try clearing the filters or adjusting the date range." ctaLabel="Clear filters"></ds-empty-state>
      </div>
    `,
    moduleMetadata: { imports: [EmptyStateComponent] },
  }),
};
