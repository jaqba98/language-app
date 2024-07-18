import type { Meta, StoryObj } from '@storybook/angular';
import { MainNavComponent } from './main-nav.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MainNavComponent> = {
  component: MainNavComponent,
  title: 'MainNavComponent',
};
export default meta;
type Story = StoryObj<MainNavComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/main-nav works!/gi)).toBeTruthy();
  },
};
