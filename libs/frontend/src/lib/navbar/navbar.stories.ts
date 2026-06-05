import type { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from './navbar';

const meta: Meta<NavbarComponent> = {
  title: 'Components/Navbar',
  component: NavbarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  args: { activeIndex: 0 },
  argTypes: {
    activeIndex: { control: { type: 'number', min: 0, max: 2 } },
  },
  decorators: [
    (story) => ({
      template: `<div style="width:390px;background:var(--bg-0);border-radius:0 0 28px 28px;overflow:hidden;box-shadow:0 0 0 1px var(--line)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<NavbarComponent>;

export const Default: Story = {};
export const History: Story = { args: { activeIndex: 1 } };
export const Profile: Story = { args: { activeIndex: 2 } };
