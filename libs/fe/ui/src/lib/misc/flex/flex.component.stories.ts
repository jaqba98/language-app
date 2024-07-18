import type { Meta, StoryObj } from '@storybook/angular';
import { FlexComponent } from './flex.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FlexComponent> = {
  component: FlexComponent,
  title: 'FlexComponent',
};
export default meta;
type Story = StoryObj<FlexComponent>;

export const Primary: Story = {
  args: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    gap: '0',
  },
};

export const Heading: Story = {
  args: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    gap: '0',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/flex works!/gi)).toBeTruthy();
  },
};
