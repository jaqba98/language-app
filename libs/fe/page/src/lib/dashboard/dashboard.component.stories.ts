import type { Meta, StoryObj } from '@storybook/angular';

import { DashboardComponent } from './dashboard.component';

const meta: Meta<DashboardComponent> = {
  component: DashboardComponent,
  title: 'fe/page/dashboard',
};
export default meta;
type Story = StoryObj<DashboardComponent>;

export const Default: Story = {};
