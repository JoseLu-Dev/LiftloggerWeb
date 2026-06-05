import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { InputComponent } from './input';

@Component({
  selector: 'ds-input-grid-demo',
  standalone: true,
  imports: [InputComponent],
  template: `
    <div style="display:flex;flex-direction:column;gap:16px;width:280px;padding:24px;background:var(--bg-0)">
      <ds-input label="Athlete" placeholder="Name…" type="text"></ds-input>
      <ds-input label="Top set weight" type="numeric" unit="kg" placeholder="0.0"></ds-input>
      <ds-input label="Session notes" type="textarea" placeholder="Notes…" [rows]="3"></ds-input>
    </div>
  `,
})
class InputGridDemoComponent {}

@Component({
  selector: 'ds-input-states-demo',
  standalone: true,
  imports: [InputComponent],
  template: `
    <div style="display:flex;flex-direction:column;gap:16px;width:280px;padding:24px;background:var(--bg-0)">
      <ds-input label="Default" placeholder="Placeholder…"></ds-input>
      <ds-input label="Filled" value="Alex Johnson"></ds-input>
      <ds-input label="Error" value="bad input" state="error" helpText="Invalid value"></ds-input>
      <ds-input label="Disabled" placeholder="Unavailable" [disabled]="true"></ds-input>
    </div>
  `,
})
class InputStatesDemoComponent {}

@Component({
  selector: 'ds-input-numeric-demo',
  standalone: true,
  imports: [InputComponent],
  template: `
    <div style="display:flex;flex-direction:column;gap:16px;width:280px;padding:24px;background:var(--bg-0)">
      <ds-input label="Weight" type="numeric" unit="kg" placeholder="0.0" value="182.5"></ds-input>
      <ds-input label="Reps (1–20)" type="numeric" [min]="1" [max]="20" placeholder="0" helpText="Min 1 · Max 20"></ds-input>
      <ds-input label="RPE (6–10)" type="numeric" [min]="6" [max]="10" placeholder="0.0" helpText="Min 6 · Max 10"></ds-input>
    </div>
  `,
})
class InputNumericDemoComponent {}

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
    min: { control: 'number' },
    max: { control: 'number' },
    value: { control: 'text' },
  },
  decorators: [
    (story) => ({
      template: `<div style="width:280px;padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: { label: 'Athlete', placeholder: 'Name…', type: 'text' },
};

export const WithLabel: Story = {
  name: 'With label',
  args: { label: 'Session title', placeholder: 'Upper A…', type: 'text' },
};

export const WithUnit: Story = {
  name: 'With unit',
  args: { label: 'Top set weight', type: 'numeric', unit: 'kg', placeholder: '0.0' },
};

export const Selected: Story = {
  name: 'Filled / selected',
  args: { label: 'Athlete', type: 'text', value: 'Alex Johnson' },
};

export const Error: Story = {
  args: { label: 'Athlete', placeholder: 'Name…', state: 'error', helpText: 'Required field' },
};

export const MinMax: Story = {
  name: 'Numeric with min / max',
  args: { label: 'Reps', type: 'numeric', min: 1, max: 20, placeholder: '0', helpText: 'Min 1 · Max 20' },
};

export const Textarea: Story = {
  args: { label: 'Notes', type: 'textarea', placeholder: 'Session notes…', rows: 4 },
};

export const Disabled: Story = {
  args: { label: 'Athlete', placeholder: 'Name…', disabled: true },
};

export const AllInputs: Story = {
  name: 'All inputs',
  render: () => ({
    template: `<ds-input-grid-demo></ds-input-grid-demo>`,
    moduleMetadata: { imports: [InputGridDemoComponent] },
  }),
};

export const AllStates: Story = {
  name: 'All states',
  render: () => ({
    template: `<ds-input-states-demo></ds-input-states-demo>`,
    moduleMetadata: { imports: [InputStatesDemoComponent] },
  }),
};

export const NumericVariants: Story = {
  name: 'Numeric variants (unit + min/max)',
  render: () => ({
    template: `<ds-input-numeric-demo></ds-input-numeric-demo>`,
    moduleMetadata: { imports: [InputNumericDemoComponent] },
  }),
};
