import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  title: 'Design System/Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'numeric', 'textarea'] },
    state: { control: 'select', options: ['default', 'error'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    unit: { control: 'text' },
    helpText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (story) => ({
      template: `<div style="width:260px;padding:24px;background:var(--bg-0)">${story().template ?? '<ng-content></ng-content>'}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: { label: 'Athlete', placeholder: 'Name…', type: 'text' },
};

export const Numeric: Story = {
  args: { label: 'Top set weight', type: 'numeric', unit: 'kg', placeholder: '0.0' },
};

export const Error: Story = {
  args: { label: 'Athlete', placeholder: 'Name…', state: 'error', helpText: 'Required field' },
};

export const Textarea: Story = {
  args: { label: 'Notes', type: 'textarea', placeholder: 'Session notes…', rows: 4 },
};

export const Disabled: Story = {
  args: { label: 'Athlete', placeholder: 'Name…', disabled: true },
};
