import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { SetRowComponent } from './set-row';

@Component({
  selector: 'ds-set-row-demo',
  standalone: true,
  imports: [SetRowComponent],
  template: `
    <div style="width:480px;padding:24px;background:var(--bg-0)">
      <ds-set-row [rows]="rows"></ds-set-row>
    </div>
  `,
})
class SetRowDemoComponent {
  rows = [
    { setNumber: 1, target: { reps: 5, weight: '175', rpe: 7 }, actual: { reps: 5, weight: '175', rpe: 7 } },
    { setNumber: 2, target: { reps: 5, weight: '177.5', rpe: 7.5 }, actual: { reps: 5, weight: '177.5', rpe: 8 } },
    { setNumber: 3, target: { reps: 5, weight: '182.5', rpe: 8 }, actual: { reps: '', weight: '', rpe: '' } },
  ];
}

@Component({
  selector: 'ds-set-row-all-demo',
  standalone: true,
  imports: [SetRowComponent],
  template: `
    <div style="width:480px;padding:24px;background:var(--bg-0)">
      <ds-set-row [rows]="rows"></ds-set-row>
    </div>
  `,
})
class SetRowAllDemoComponent {
  rows = [
    { setNumber: 1, target: { reps: 3, weight: '190', rpe: 7 }, actual: { reps: 3, weight: '190', rpe: 7 } },
    { setNumber: 2, target: { reps: 3, weight: '195', rpe: 8 }, actual: { reps: 3, weight: '195', rpe: 8.5 } },
    { setNumber: 3, target: { reps: 3, weight: '200', rpe: 9 }, actual: { reps: 2, weight: '200', rpe: 9.5 } },
  ];
}

const meta: Meta<SetRowComponent> = {
  title: 'Components/SetRow',
  component: SetRowComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  decorators: [
    (story) => ({
      template: `<div style="width:480px;padding:24px;background:var(--bg-0)">${story().template ?? ''}</div>`,
      moduleMetadata: story().moduleMetadata,
    }),
  ],
};

export default meta;
type Story = StoryObj<SetRowComponent>;

export const Default: Story = {
  render: () => ({
    template: `<ds-set-row-demo></ds-set-row-demo>`,
    moduleMetadata: { imports: [SetRowDemoComponent] },
  }),
};

export const AllLogged: Story = {
  name: 'All logged',
  render: () => ({
    template: `<ds-set-row-all-demo></ds-set-row-all-demo>`,
    moduleMetadata: { imports: [SetRowAllDemoComponent] },
  }),
};
