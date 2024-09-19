import type { Meta, StoryObj } from '@storybook/angular';

import { ChangePasswordFormComponent } from './change-password-form.component';

const meta: Meta<ChangePasswordFormComponent> = {
  component: ChangePasswordFormComponent,
  title: 'fe/ui/form/change-password-form',
  argTypes: {
    event: {
      action: 'event',
    },
  },
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
};
export default meta;
type Story = StoryObj<ChangePasswordFormComponent>;

export const Default: Story = {};
