import type { Meta, StoryObj } from '@storybook/angular';
import { DialogComponent } from './dialog';

const meta: Meta<DialogComponent> = {
  title: 'Components/Dialog',
  component: DialogComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  args: {
    open: true,
    title: 'Save program changes?',
    body: 'You have unsaved changes to Block 3. They will be lost if you navigate away.',
    confirmLabel: 'Save changes',
    cancelLabel: 'Discard',
    variant: 'default',
  },
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    body: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
    variant: { control: 'select', options: ['default', 'danger', 'warning'] },
  },
  decorators: [
    (story) => ({
      template: `<div style="min-height:400px;background:var(--bg-0);position:relative">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<DialogComponent>;

export const Default: Story = {};

export const Danger: Story = {
  args: {
    open: true,
    title: 'Delete program?',
    body: 'This will permanently remove the program and all associated sessions. This cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Keep program',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    open: true,
    title: 'Mark session complete?',
    body: 'Some sets are missing actual data. Completing the session now will lock those sets as blank.',
    confirmLabel: 'Complete anyway',
    cancelLabel: 'Go back',
    variant: 'warning',
  },
};
