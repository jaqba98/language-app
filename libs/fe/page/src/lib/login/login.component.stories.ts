import type { Meta, StoryObj } from '@storybook/angular';

import { LoginComponent } from './login.component';

const meta: Meta<LoginComponent> = {
  component: LoginComponent,
  title: 'fe/page/login',
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
type Story = StoryObj<LoginComponent>;

export const Default: Story = {};
