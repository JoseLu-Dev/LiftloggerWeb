import type { Meta, StoryObj } from '@storybook/angular';
import { BreadcrumbComponent } from './breadcrumb';

const meta: Meta<BreadcrumbComponent> = {
  title: 'Components/Breadcrumb',
  component: BreadcrumbComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  args: {
    items: [{ label: 'Athletes' }, { label: 'Maya Okafor' }],
  },
  decorators: [
    (story) => ({
      template: `<div style="padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<BreadcrumbComponent>;

export const Default: Story = {};
export const ThreeLevels: Story = {
  args: { items: [{ label: 'Athletes' }, { label: 'Maya Okafor' }, { label: 'Block 3 · Week 2' }] },
};
