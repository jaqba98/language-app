import type { Meta, StoryObj } from '@storybook/angular';

import { ChangePasswordComponent } from './change-password.component';

const meta: Meta<ChangePasswordComponent> = {
  component: ChangePasswordComponent,
  title: 'fe/page/change-password',
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
type Story = StoryObj<ChangePasswordComponent>;

export const Default: Story = {};
