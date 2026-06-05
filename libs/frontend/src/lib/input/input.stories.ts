import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { InputComponent } from './input';

@Component({
  selector: 'ds-input-all-demo',
  standalone: true,
  imports: [InputComponent],
  template: `
    <div style="display:flex;flex-direction:column;gap:16px;width:280px;padding:24px;background:var(--bg-0)">
      <ds-input label="Default"  placeholder="Name…"></ds-input>
      <ds-input label="Filled"   value="Alex Johnson"></ds-input>
      <ds-input label="Error"    value="bad input" state="error" helpText="Invalid value"></ds-input>
      <ds-input label="Disabled" placeholder="Unavailable" [disabled]="true"></ds-input>
    </div>
  `,
})
class InputAllDemoComponent {}

@Component({
  selector: 'ds-input-numeric-demo',
  standalone: true,
  imports: [InputComponent],
  template: `
    <div style="display:flex;flex-direction:column;gap:16px;width:280px;padding:24px;background:var(--bg-0)">
      <ds-input label="Weight" type="numeric" unit="kg" placeholder="0.0" value="182.5"></ds-input>
      <ds-input label="Reps (1–20)" type="numeric" [min]="1" [max]="20" placeholder="0" helpText="Min 1 · Max 20"></ds-input>
    </div>
  `,
})
class InputNumericDemoComponent {}

@Component({
  selector: 'ds-input-maxlength-demo',
  standalone: true,
  imports: [InputComponent],
  template: `
    <div style="display:flex;flex-direction:column;gap:16px;width:280px;padding:24px;background:var(--bg-0)">
      <ds-input label="Session title" type="text" value="Upper A" [maxLength]="40"></ds-input>
      <ds-input label="Notes" type="textarea" placeholder="Session notes…" [rows]="4" [maxLength]="200" value="Great session today. Hit all targets."></ds-input>
    </div>
  `,
})
class InputMaxLengthDemoComponent {}

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  args: {
    label: 'Label',
    placeholder: 'Type…',
    type: 'text',
    state: 'default',
    disabled: false,
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
    maxLength: { control: 'number' },
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

export const Default: Story = {};
export const Filled: Story = { args: { label: 'Athlete', value: 'Alex Johnson' } };
export const WithUnit: Story = { args: { label: 'Top set weight', type: 'numeric', unit: 'kg', placeholder: '0.0' } };
export const WithMaxLength: Story = {
  name: 'With max length',
  render: () => ({
    template: `<ds-input-maxlength-demo></ds-input-maxlength-demo>`,
    moduleMetadata: { imports: [InputMaxLengthDemoComponent] },
  }),
};
export const Textarea: Story = { args: { label: 'Notes', type: 'textarea', placeholder: 'Session notes…', rows: 4 } };
export const Error: Story = { args: { label: 'Athlete', state: 'error', helpText: 'Required field' } };
export const Disabled: Story = { args: { label: 'Athlete', disabled: true } };

export const AllStates: Story = {
  name: 'All states',
  render: () => ({
    template: `<ds-input-all-demo></ds-input-all-demo>`,
    moduleMetadata: { imports: [InputAllDemoComponent] },
  }),
};

export const NumericVariants: Story = {
  name: 'Numeric (unit + min/max)',
  render: () => ({
    template: `<ds-input-numeric-demo></ds-input-numeric-demo>`,
    moduleMetadata: { imports: [InputNumericDemoComponent] },
  }),
};
