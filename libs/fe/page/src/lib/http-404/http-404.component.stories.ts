import type { Meta, StoryObj } from '@storybook/angular';

import { Http404Component } from './http-404.component';

const meta: Meta<Http404Component> = {
  component: Http404Component,
  title: 'fe/page/http-404',
};
export default meta;
type Story = StoryObj<Http404Component>;

export const Default: Story = {};
