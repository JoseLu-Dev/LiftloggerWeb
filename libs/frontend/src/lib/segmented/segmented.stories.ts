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
  title: 'Components/Segmented',
  component: SegmentedComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    a11y: { config: {} },
    backgrounds: { default: 'canvas' },
  },
  args: {
    options: ['Day', 'Week', 'Block', 'All time'],
    activeIndex: 1,
    mode: 'pill',
  },
  argTypes: {
    mode: { control: 'select', options: ['pill', 'brand', 'tabs'] },
    activeIndex: { control: { type: 'number', min: 0 } },
    ariaLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SegmentedComponent>;

export const Default: Story = {};
export const Brand: Story = { args: { mode: 'brand', options: ['Coach', 'Athlete'], activeIndex: 0 } };
export const Tabs: Story = {
  name: 'Tabs (underline)',
  render: () => ({
    template: `<ds-tabs-demo></ds-tabs-demo>`,
    moduleMetadata: { imports: [TabsDemoComponent] },
  }),
};
