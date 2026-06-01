import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner';

const meta: Meta<SpinnerComponent> = {
  title: 'Design System/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    onAccent: { control: 'boolean' },
    label: { control: 'text', description: 'aria-label for screen readers' },
  },
};

export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Small: Story = { args: { size: 'sm' } };
export const Medium: Story = { args: { size: 'md' } };
export const Large: Story = { args: { size: 'lg' } };
export const OnAccent: Story = {
  args: { size: 'md', onAccent: true },
  parameters: { backgrounds: { default: 'accent' } },
  decorators: [
    (story) => ({
      template: `<div style="background:var(--blue-500);padding:16px;border-radius:8px">${story().template}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display:flex;gap:20px;align-items:center;padding:24px;background:var(--bg-0)">
        <ds-spinner size="sm"></ds-spinner>
        <ds-spinner size="md"></ds-spinner>
        <ds-spinner size="lg"></ds-spinner>
      </div>
    `,
    moduleMetadata: { imports: [SpinnerComponent] },
  }),
};
