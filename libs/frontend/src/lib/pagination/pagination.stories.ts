import type { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination';

const meta: Meta<PaginationComponent> = {
  title: 'Design System/Pagination',
  component: PaginationComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    currentPage: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
  },
  decorators: [
    (story) => ({
      template: `<div style="padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<PaginationComponent>;

export const Default: Story = { args: { currentPage: 3, totalPages: 10 } };
export const FirstPage: Story = { args: { currentPage: 1, totalPages: 10 } };
export const LastPage: Story = { args: { currentPage: 10, totalPages: 10 } };
export const FewPages: Story = { args: { currentPage: 2, totalPages: 5 } };
