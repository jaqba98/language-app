import type { Meta, StoryObj } from '@storybook/angular';

import { LoginFormComponent } from './login-form.component';

const meta: Meta<LoginFormComponent> = {
  component: LoginFormComponent,
  title: 'fe/ui/form/login-form',
  argTypes: {
    loginFormEvent: {
      action: 'loginFormEvent',
    },
  },
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
};
export default meta;
type Story = StoryObj<LoginFormComponent>;

export const Default: Story = {};
