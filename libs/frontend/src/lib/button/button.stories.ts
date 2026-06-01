import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Design System/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text', description: 'Accessible label override' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: { variant: 'primary', size: 'md', label: 'Log set' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md', label: 'Add note' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md', label: 'Cancel' },
};

export const Danger: Story = {
  args: { variant: 'danger', size: 'md', label: 'Delete program' },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', label: 'Save' },
};

export const Large: Story = {
  args: { variant: 'primary', size: 'lg', label: 'Start session' },
};

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', label: 'Unavailable', disabled: true },
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:24px;background:var(--bg-0)">
        <ds-button variant="primary" label="Log set"></ds-button>
        <ds-button variant="secondary" label="Add note"></ds-button>
        <ds-button variant="ghost" label="Cancel"></ds-button>
        <ds-button variant="danger" label="Delete program"></ds-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};
