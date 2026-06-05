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

const ARROW_ICON = `<svg slot="end" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const PLUS_ICON  = `<svg slot="start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>`;
const TRASH_ICON = `<svg slot="start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;

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

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;align-items:center;padding:24px;background:var(--bg-0)">
        <ds-button variant="primary" size="sm" label="Small"></ds-button>
        <ds-button variant="primary" size="md" label="Medium"></ds-button>
        <ds-button variant="primary" size="lg" label="Large"></ds-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};

export const WithIconLeading: Story = {
  name: 'With icon — leading',
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:24px;background:var(--bg-0)">
        <ds-button variant="primary" size="sm" label="Add set">
          ${PLUS_ICON}
        </ds-button>
        <ds-button variant="primary" size="md" label="Add set">
          ${PLUS_ICON}
        </ds-button>
        <ds-button variant="primary" size="lg" label="Add set">
          ${PLUS_ICON}
        </ds-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};

export const WithIconTrailing: Story = {
  name: 'With icon — trailing',
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:24px;background:var(--bg-0)">
        <ds-button variant="primary" size="sm" label="Log set">
          ${ARROW_ICON}
        </ds-button>
        <ds-button variant="primary" size="md" label="Log set">
          ${ARROW_ICON}
        </ds-button>
        <ds-button variant="primary" size="lg" label="Start session">
          ${ARROW_ICON}
        </ds-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};

export const IconVariants: Story = {
  name: 'Icon across variants',
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:24px;background:var(--bg-0)">
        <ds-button variant="primary"   label="Log set">   ${ARROW_ICON} </ds-button>
        <ds-button variant="secondary" label="Add set">   ${PLUS_ICON}  </ds-button>
        <ds-button variant="ghost"     label="Cancel"></ds-button>
        <ds-button variant="danger"    label="Delete">    ${TRASH_ICON} </ds-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};

export const AllVariants: Story = {
  name: 'All variants (no icon)',
  render: () => ({
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:24px;background:var(--bg-0)">
        <ds-button variant="primary"   label="Log set"></ds-button>
        <ds-button variant="secondary" label="Add note"></ds-button>
        <ds-button variant="ghost"     label="Cancel"></ds-button>
        <ds-button variant="danger"    label="Delete program"></ds-button>
      </div>
    `,
    moduleMetadata: { imports: [ButtonComponent] },
  }),
};
