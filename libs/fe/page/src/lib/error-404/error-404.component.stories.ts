import { type Meta, type StoryObj } from '@storybook/angular';

import { Error404Component } from './error-404.component';

const meta: Meta<Error404Component> = {
  component: Error404Component,
  title: 'fe/page/error-404',
};
export default meta;
type Story = StoryObj<Error404Component>;

export const Primary: Story = {};
