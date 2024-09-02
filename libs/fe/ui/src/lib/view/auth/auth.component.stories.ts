import type { Meta, StoryObj } from '@storybook/angular';

import { AuthComponent } from './auth.component';

const meta: Meta<AuthComponent> = {
  component: AuthComponent,
  title: 'fe/ui/view/auth',
};
export default meta;
type Story = StoryObj<AuthComponent>;

export const Default: Story = {};
