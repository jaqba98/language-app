import type { Meta, StoryObj } from '@storybook/angular';

import { SuccessComponent } from './success.component';

const meta: Meta<SuccessComponent> = {
  component: SuccessComponent,
  title: 'fe/ui/misc/success',
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
};
export default meta;
type Story = StoryObj<SuccessComponent>;

export const Default: Story = {
  args: {
    value: 'Lorem ipsum...',
  },
};
