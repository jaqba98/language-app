import type { Meta, StoryObj } from '@storybook/angular';

import { AccountComponent } from './account.component';

const meta: Meta<AccountComponent> = {
  component: AccountComponent,
  title: 'fe/page/account',
};
export default meta;
type Story = StoryObj<AccountComponent>;

export const Default: Story = {};
