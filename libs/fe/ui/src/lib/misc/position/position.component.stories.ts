import type { Meta, StoryObj } from '@storybook/angular';
import { PositionComponent } from './position.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PositionComponent> = {
  component: PositionComponent,
  title: 'PositionComponent',
};
export default meta;
type Story = StoryObj<PositionComponent>;

export const Primary: Story = {
  args: {
    position: 'static',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
  },
};

export const Heading: Story = {
  args: {
    position: 'static',
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/position works!/gi)).toBeTruthy();
  },
};
