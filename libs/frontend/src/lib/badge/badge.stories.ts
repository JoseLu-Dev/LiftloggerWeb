import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge';

const meta: Meta<BadgeComponent> = {
  title: 'Design System/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'success', 'warning', 'danger', 'neutral', 'live', 'pr'],
    },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Brand: Story = { args: { variant: 'brand', label: 'Active' } };
export const Success: Story = { args: { variant: 'success', label: 'On pace' } };
export const Warning: Story = { args: { variant: 'warning', label: 'Behind' } };
export const Danger: Story = { args: { variant: 'danger', label: 'Failed' } };
export const Neutral: Story = { args: { variant: 'neutral', label: 'Deload' } };
export const Live: Story = { args: { variant: 'live', label: 'Training now' } };
export const PR: Story = { args: { variant: 'pr', label: 'New PR' } };

export const AllVariants: Story = {
  name: 'All variants',
  render: () => ({
    template: `
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;padding:24px;background:var(--bg-0)">
        <ds-badge variant="brand" label="Active"></ds-badge>
        <ds-badge variant="success" label="On pace"></ds-badge>
        <ds-badge variant="warning" label="Behind"></ds-badge>
        <ds-badge variant="danger" label="Failed"></ds-badge>
        <ds-badge variant="neutral" label="Deload"></ds-badge>
        <ds-badge variant="live" label="Training now"></ds-badge>
        <ds-badge variant="pr" label="New PR"></ds-badge>
      </div>
    `,
    moduleMetadata: { imports: [BadgeComponent] },
  }),
};
