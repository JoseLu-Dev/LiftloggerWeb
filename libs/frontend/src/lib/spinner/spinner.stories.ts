import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { SpinnerComponent } from './spinner';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'ds-inline-loader-demo',
  standalone: true,
  imports: [SpinnerComponent],
  template: `
    <div style="display:flex;flex-direction:column;gap:16px;padding:24px;background:var(--bg-0)">
      <div style="display:flex;align-items:center;gap:8px;color:var(--fg-2);font:var(--t-body)">
        <ds-spinner size="sm"></ds-spinner><span>Saving session…</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;color:var(--fg-2);font:var(--t-body)">
        <ds-spinner size="sm"></ds-spinner><span>Syncing data…</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px;color:var(--fg-2);font:var(--t-body)">
        <ds-spinner size="sm"></ds-spinner><span>Calculating e1RM…</span>
      </div>
    </div>
  `,
})
class InlineLoaderDemoComponent {}

@Component({
  selector: 'ds-button-loader-demo',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:24px;background:var(--bg-0)">
      <ds-button variant="primary"   size="sm"  label="Saving…"    [loading]="true"></ds-button>
      <ds-button variant="primary"   size="md"  label="Saving…"    [loading]="true"></ds-button>
      <ds-button variant="primary"   size="lg"  label="Saving…"    [loading]="true"></ds-button>
      <ds-button variant="secondary" size="md"  label="Uploading…" [loading]="true"></ds-button>
    </div>
  `,
})
class ButtonLoaderDemoComponent {}

const meta: Meta<SpinnerComponent> = {
  title: 'Components/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  args: {
    size: 'md',
    onAccent: false,
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    onAccent: { control: 'boolean' },
    label: { control: 'text', description: 'aria-label for screen readers' },
  },
};

export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Default: Story = {};
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };
export const OnAccent: Story = {
  args: { onAccent: true },
  parameters: { backgrounds: { default: 'accent' } },
  decorators: [
    (story) => ({
      template: `<div style="background:var(--blue-500);padding:16px;border-radius:8px">${story().template}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export const InlineLoader: Story = {
  name: 'Inline loader',
  render: () => ({
    template: `<ds-inline-loader-demo></ds-inline-loader-demo>`,
    moduleMetadata: { imports: [InlineLoaderDemoComponent] },
  }),
};

export const ButtonLoader: Story = {
  name: 'Button loader',
  render: () => ({
    template: `<ds-button-loader-demo></ds-button-loader-demo>`,
    moduleMetadata: { imports: [ButtonLoaderDemoComponent] },
  }),
};
