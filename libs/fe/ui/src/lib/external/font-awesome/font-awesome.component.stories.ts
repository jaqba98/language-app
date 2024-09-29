import type { Meta, StoryObj } from '@storybook/angular';

import { FontAwesomeComponent } from './font-awesome.component';

const meta: Meta<FontAwesomeComponent> = {
  component: FontAwesomeComponent,
  title: 'fe/ui/external/font-awesome',
};
export default meta;
type Story = StoryObj<FontAwesomeComponent>;

export const LockGray: Story = {
  args: {
    type: 'lock',
    color: 'gray',
    size: '3x',
  },
};

export const PlayGreen: Story = {
  args: {
    type: 'play',
    color: 'green',
    size: '5x',
  },
};

export const StarGold: Story = {
  args: {
    type: 'star',
    color: 'gold',
    size: '7x',
  },
};
