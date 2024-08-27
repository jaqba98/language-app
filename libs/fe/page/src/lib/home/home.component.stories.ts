import type { Meta, StoryObj } from '@storybook/angular';

import { HomeComponent } from './home.component';

const meta: Meta<HomeComponent> = {
  component: HomeComponent,
  title: 'fe/page/home',
};
export default meta;
type Story = StoryObj<HomeComponent>;

export const Primary: Story = {};
