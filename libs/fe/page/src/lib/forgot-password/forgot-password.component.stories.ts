import type { Meta, StoryObj } from '@storybook/angular';

import { ForgotPasswordComponent } from './forgot-password.component';

const meta: Meta<ForgotPasswordComponent> = {
  component: ForgotPasswordComponent,
  title: 'fe/page/forgot-password',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    event: {
      action: 'event',
    },
  },
};
export default meta;
type Story = StoryObj<ForgotPasswordComponent>;

export const Default: Story = {};
