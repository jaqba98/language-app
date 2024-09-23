import type { Meta, StoryObj } from '@storybook/angular';

import { FontAwesomeComponent } from './font-awesome.component';

const meta: Meta<FontAwesomeComponent> = {
  component: FontAwesomeComponent,
  title: 'fe/ui/infrastructure/font-awesome',
};
export default meta;
type Story = StoryObj<FontAwesomeComponent>;

export const Lock: Story = {
  args: {
    type: 'lock',
    size: '4x',
  },
};

export const Edit: Story = {
  args: {
    type: 'edit',
    size: '4x',
  },
};
