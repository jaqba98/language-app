import type { Meta, StoryObj } from '@storybook/angular';

import { FontAwesomeComponent } from './font-awesome.component';

const meta: Meta<FontAwesomeComponent> = {
  component: FontAwesomeComponent,
  title: 'fe/ui/infrastructure/font-awesome',
};
export default meta;
type Story = StoryObj<FontAwesomeComponent>;

export const LockGray: Story = {
  args: {
    type: 'lock',
    size: '4x',
    colorType: 'gray',
  },
};

export const LockGreen: Story = {
  args: {
    type: 'play',
    size: '4x',
    colorType: 'green',
  },
};

export const LockGold: Story = {
  args: {
    type: 'star',
    size: '4x',
    colorType: 'gold',
  },
};
