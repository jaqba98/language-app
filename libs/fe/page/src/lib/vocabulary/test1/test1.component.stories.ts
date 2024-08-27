import type { Meta, StoryObj } from '@storybook/angular';

import { Test1Component } from './test1.component';

const meta: Meta<Test1Component> = {
  component: Test1Component,
  title: 'Test1Component',
};
export default meta;
type Story = StoryObj<Test1Component>;

export const Primary: Story = {};
