import type { Meta, StoryObj } from '@storybook/angular';

import { ErrorComponent } from './error.component';

const meta: Meta<ErrorComponent> = {
  component: ErrorComponent,
  title: 'fe/ui/misc/error',
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
};
export default meta;
type Story = StoryObj<ErrorComponent>;

export const Default: Story = {
  args: {
    value: 'Lorem ipsum...',
  },
};
