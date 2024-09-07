import type { Meta, StoryObj } from '@storybook/angular';

import { ForgotPasswordFormComponent } from './forgot-password-form.component';

const meta: Meta<ForgotPasswordFormComponent> = {
  component: ForgotPasswordFormComponent,
  title: 'fe/ui/form/forgot-password-form',
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
type Story = StoryObj<ForgotPasswordFormComponent>;

export const Default: Story = {};
