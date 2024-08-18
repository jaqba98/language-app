import { Meta, StoryObj } from '@storybook/angular';

import { CounterComponent } from './counter.component';

const meta: Meta<CounterComponent> = {
  component: CounterComponent,
  title: 'fe/ui/misc/counter',
};
export default meta;
type Story = StoryObj<CounterComponent>;

export const Paragraph: Story = {
  args: {
    value: 0,
  },
};
