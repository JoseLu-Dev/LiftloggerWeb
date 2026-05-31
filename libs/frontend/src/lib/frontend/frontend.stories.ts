import type { Meta, StoryObj } from '@storybook/angular';
import { Frontend } from './frontend';

const meta: Meta<Frontend> = {
  title: 'Design System/Frontend',
  component: Frontend,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<Frontend>;

export const Default: Story = {};
