import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { SegmentedComponent } from './segmented';

@Component({
  selector: 'ds-tabs-demo',
  standalone: true,
  imports: [SegmentedComponent],
  template: `
    <div style="width:420px;padding:24px;background:var(--bg-0)">
      <ds-segmented
        mode="tabs"
        [options]="options"
        [activeIndex]="active"
        (activeIndexChange)="active = $event"
      ></ds-segmented>
    </div>
  `,
})
class TabsDemoComponent {
  options = ['Overview', 'Sessions', 'Program', 'Notes'];
  active = 0;
}

const meta: Meta<SegmentedComponent> = {
  title: 'Design System/Segmented',
  component: SegmentedComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  argTypes: {
    mode: { control: 'select', options: ['pill', 'brand', 'tabs'] },
    activeIndex: { control: { type: 'number', min: 0 } },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SegmentedComponent>;

export const Pill: Story = {
  args: { mode: 'pill', options: ['Day', 'Week', 'Block', 'All time'], activeIndex: 1 },
};

export const Brand: Story = {
  args: { mode: 'brand', options: ['Coach', 'Athlete'], activeIndex: 1 },
};

export const Tabs: Story = {
  name: 'Tabs (underline)',
  render: () => ({
    template: `<ds-tabs-demo></ds-tabs-demo>`,
    moduleMetadata: { imports: [TabsDemoComponent] },
  }),
};
